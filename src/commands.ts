import { changeColor } from './features/changeColor';

import * as vscode from 'vscode';

interface CommandArgs {
  workbenchConfig: vscode.WorkspaceConfiguration;
  colorCustomizationKeys: string[];
  extensionConfig: vscode.WorkspaceConfiguration;
}

const COMMAND_ID_TO_CONFIG_NAME = {
  'nvim-theme.normal': 'nvimColorNormal',
  'nvim-theme.insert': 'nvimColorInsert',
  'nvim-theme.visual': 'nvimColorVisual',
  'nvim-theme.replace': 'nvimColorVisual' // !FIXME: check no typo?
};

export const commands = ({
  workbenchConfig,
  colorCustomizationKeys,
  extensionConfig
}: CommandArgs) =>
  Object.entries(COMMAND_ID_TO_CONFIG_NAME).map(([commandName, configName]) =>
    vscode.commands.registerCommand(commandName, function () {
      changeColor(
        workbenchConfig,
        colorCustomizationKeys,
        extensionConfig.get(configName) as string
      );
    })
  );
