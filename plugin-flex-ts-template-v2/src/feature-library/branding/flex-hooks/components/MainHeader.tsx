import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../../types/feature-loader';
import { getCustomLogoUrl } from '../../config';
import { replaceStringAttributes } from '../../../../utils/helpers';

export const componentName = FlexComponent.MainHeader;
export const componentHook = function applyBrandingLogo(flex: typeof Flex) {
  flex.MainHeader.defaultProps.logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png';
};
