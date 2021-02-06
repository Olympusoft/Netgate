import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CookieOptions } from 'express';

import { CookieRequest, CookieResponse, LoginRequest } from '../interfaces/cookie-types';
import { GeneratedTokens, Payload } from '../interfaces/token-types';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { constants, getCookies } from '../utils';
import { AuthService } from './auth.service';
import { CookiePayload } from './decorators/cookiePayload.decorator';
import { OnlyAuthenticatedGuard } from './guards/only-authenticated.guard';
import { LocalAuthGuard } from './strategies/local/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: LoginRequest, @Res({ passthrough: true }) response: CookieResponse) {
    const {
      user,
      body: { keepMeLogin },
    } = request;

    const genTokens = await this.authService.login(user, keepMeLogin);
    AuthController.setCookies(genTokens, keepMeLogin, response, true);
    // TODO: add separate method for extracting user
    // eslint-disable-next-line no-unused-vars
    const { password, ...rest } = user;
    return rest;
  }

  @Post('register')
  async register(
    @Body() user: CreateUserDto,
    @Res({ passthrough: true }) response: CookieResponse,
  ) {
    const newUser = await this.authService.register(user).catch(() => {
      throw new BadRequestException('User already exists');
    });
    const genTokens = await this.authService.login(newUser, false);
    AuthController.setCookies(genTokens, false, response, true);
    // TODO: add separate method for extracting user
    // eslint-disable-next-line no-unused-vars
    const { password, ...rest } = user;
    return rest;
  }

  @Get('refresh')
  async refresh(
    @CookiePayload() payload: Payload,
    @Req() request: CookieRequest,
    @Res({ passthrough: true }) response: CookieResponse,
  ) {
    const { tokenConfig } = constants;
    const cookies = getCookies(request);
    const newTokens = await this.authService.refreshTokens({
      refreshToken: cookies[tokenConfig.refreshToken.name],
      logoutToken: cookies[tokenConfig.logoutToken.name],
      accessToken: cookies[tokenConfig.accessToken.name],
    });
    AuthController.setCookies(newTokens, payload.keepMeLogin, response, false);
  }

  @UseGuards(OnlyAuthenticatedGuard)
  @Get('logout')
  async logout(
    @Req() request: CookieRequest,
    @CookiePayload() payload: Payload,
    @Res({ passthrough: true }) response: CookieResponse,
  ) {
    const { tokenConfig } = constants;
    const cookies = getCookies(request);
    const refreshToken = cookies[tokenConfig.refreshToken.name];
    await this.authService.logout(refreshToken, payload.sub);

    response.clearCookie(tokenConfig.refreshToken.name);
    response.clearCookie(tokenConfig.logoutToken.name);
    response.clearCookie(tokenConfig.accessToken.name);
  }

  private static setCookies(
    tokenGen: GeneratedTokens,
    keepMeLogin: boolean,
    response: CookieResponse,
    setRefreshToken: boolean,
  ) {
    const {
      tokens: { accessToken, logoutToken, refreshToken },
      accessExpiration,
      refreshExpiration,
    } = tokenGen;
    const { tokenConfig } = constants;
    const isDevelopment = process.env.ENV === 'development';
    const options: CookieOptions = {
      httpOnly: true,
      path: '/',
      secure: !isDevelopment,
      sameSite: isDevelopment ? undefined : 'strict',
    };

    if (!keepMeLogin) {
      response.cookie(tokenConfig.logoutToken.name, logoutToken, {
        ...options,
        expires: undefined,
      });
    }
    if (setRefreshToken) {
      response.cookie(tokenConfig.refreshToken.name, refreshToken, {
        ...options,
        expires: refreshExpiration,
      });
    }
    response.cookie(tokenConfig.accessToken.name, accessToken, {
      ...options,
      expires: accessExpiration,
    });
  }
}
