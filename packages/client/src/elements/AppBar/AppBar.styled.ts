import styled from 'styled-components';

import { TabsOrientation } from '../layouts/TabbedLayout/Tabs/Tabs.types';

export const Wrapper = styled.div<{ orientation: TabsOrientation }>(
  ({ orientation }) => `
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${orientation === 'vertical' && 'display: flex'};
`,
);

export const TabsWrapper = styled.div<{ orientation?: TabsOrientation }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.palette.boxShadow.default};
  border-radius: 25px 25px 0 0;
  ${({ orientation }) =>
    orientation === 'vertical' &&
    `
      height: 100%;
      width: 160px;
      border-radius: 0 25px 25px 0;
  `};
`;