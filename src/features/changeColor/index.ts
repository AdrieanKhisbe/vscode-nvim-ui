export const DEFAULT_CUSTOMIZATION_KEYS = [
  'activityBarBadge.background',
  'editorCursor.foreground',
  'inputValidation.errorBorder',
  'panel.border',
  'panelTitle.activeBorder',
  'panelTitle.activeForeground',
  'peekView.border',
  'peekViewTitleLabel.foreground',
  'tab.activeBorder',
  'statusBar.border'
];

export function changeColor(
  workbenchConfig: any,
  colorCustomizationKeys: string[],
  color: string
) {
  const keys = colorCustomizationKeys || [...DEFAULT_CUSTOMIZATION_KEYS];

  for (const key of keys) {
    workbenchConfig.update(['colorCustomizations', key].join('.'), color, true);
    // 💡 (store old value?)(might need config of mode colors)
  }
}
