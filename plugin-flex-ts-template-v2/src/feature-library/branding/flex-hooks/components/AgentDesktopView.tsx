import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../../types/feature-loader';

export const componentName = FlexComponent.AgentDesktopView;
export const componentHook = function applyBrandingLogo(flex: typeof Flex) {
  
 //Hide agent panel 2
 flex.AgentDesktopView.defaultProps.showPanel2 = false;
  
 //Configure the layout of agent panel 1
 flex.AgentDesktopView.Panel1.defaultProps.splitterOrientation = Flex.SplitterOrientation.vertical;
 flex.AgentDesktopView.defaultProps.splitterOptions = {
   initialFirstPanelSize: '400px',
   minimumFirstPanelSize: '400px',
   minimumSecondPanelSize: '0px'
 }
  
};
