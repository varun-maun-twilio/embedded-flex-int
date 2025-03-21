import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import { renderToStaticMarkup } from 'react-dom/server';
import { serializeHTMLFromNodes } from "@udecode/plate-html-serializer";
import { initFeatures } from './utils/feature-loader';
import { SPEditor } from '@udecode/plate-core';
import { createEditor } from 'slate'
import { createElement } from 'react';
const PLUGIN_NAME = 'FlexTSTemplatePlugin';

export default class FlexTSTemplatePlugin extends FlexPlugin {
  // eslint-disable-next-line no-restricted-syntax
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    initFeatures(flex, manager);

  }
}
