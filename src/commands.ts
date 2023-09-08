import { changeColor } from './features/changeColor';

import * as vscode from 'vscode';

// The command has been defined in the package.json file
// Now provide the implementation of the command with  registerCommand
// The commandId parameter must match the command field in package.json

interface CommandArgs {
  workbenchConfig: vscode.WorkspaceConfiguration;
  colorCustomizationKeys: string[];
  currentColorCustomizations: Record<string, string>;
  extensionConfig: vscode.WorkspaceConfiguration;
}

const extensionConfigHelper = (extensionConfig: any, value: string): string =>
  extensionConfig.get(value);

const COMMAND_TO_CONFIG_NAME = {
  'nvim-theme.normal': 'nvimColorNormal',
  'nvim-theme.insert': 'nvimColorInsert',
  'nvim-theme.visual': 'nvimColorVisual',
  'nvim-theme.replace':'nvimColorVisual' // !FIXME: check no typo?
};

export const commands = ({
  workbenchConfig,
  colorCustomizationKeys,
  currentColorCustomizations,
  extensionConfig
}: CommandArgs) => Object.entries(COMMAND_TO_CONFIG_NAME).map(([commandName, configName]) =>
  vscode.commands.registerCommand(commandName, function () {
    changeColor(
      workbenchConfig,
      colorCustomizationKeys,
      currentColorCustomizations,
      extensionConfigHelper(extensionConfig, configName)
    );
  })
  );
