import { FeatureDefinition } from '../../types/feature-loader';
import { isFeatureEnabled } from './config';
// @ts-ignore
import hooks from './flex-hooks/**/*.*';

export const register = (): FeatureDefinition => {
 
  return { name: 'branding', hooks: typeof hooks === 'undefined' ? [] : hooks };
};
