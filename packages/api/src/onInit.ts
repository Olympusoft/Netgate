import { INestApplication } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import * as SentryTracing from '@sentry/tracing';

import { Role } from './enums/role.enum';
import { Config } from './modules/config/config';
import { InvitationsService } from './modules/invitations/invitations.service';
import { InvitationRepository } from './modules/repository/invitation.repository';
import { UserRepository } from './modules/repository/user.repository';

const initSentry = (app: INestApplication, config: Config) => {
  Sentry.init({
    dsn: config.sentry.isEnable ? config.sentry.dsn : undefined,
    environment: config.sentry.environment,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new SentryTracing.Integrations.Express(),
    ],
    tracesSampleRate: config.sentry.tracesSampleRate,
  });
};

const sendAdminInvitation = async (
  userRepository: UserRepository,
  invitationRepository: InvitationRepository,
  invitationsService: InvitationsService,
  config: Config,
) => {
  if (!(await userRepository.count()) && config.superAdminEmails) {
    await invitationRepository.repository.clear();

    config.superAdminEmails.split(';').map(async (email) => {
      await invitationsService.send({ email: email.trim(), roles: [Role.SuperAdmin] });
    });
  }
};

const onInit = async (app: INestApplication) => {
  const config = app.get(Config);
  const userRepository = app.get(UserRepository);
  const invitationRepository = app.get(InvitationRepository);
  const invitationService = app.get(InvitationsService);

  await sendAdminInvitation(userRepository, invitationRepository, invitationService, config);
  initSentry(app, config);
};

export default onInit;
