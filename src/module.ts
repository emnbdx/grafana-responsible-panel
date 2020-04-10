import { PanelPlugin } from '@grafana/data';
import { Option, defaults } from './types';
import { ResponsiblePanel } from './ResponsiblePanel';
import { OptionEditor } from './OptionEditor';

export const plugin = new PanelPlugin<Option>(ResponsiblePanel).setDefaults(defaults).setEditor(OptionEditor);
