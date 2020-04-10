import React, { PureComponent } from 'react';
import { PanelEditorProps } from '@grafana/data';
import { Option } from './types';

export class OptionEditor extends PureComponent<PanelEditorProps<Option>> {
  onDbChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, db: JSON.parse(target.value) });
  };

  onOffsetChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, offset: target.value });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <div className="gf-form">
          <span className="gf-form-label width-7">Database</span>
          <textarea className="gf-form-input width-25 ng-valid ng-empty ng-dirty ng-valid-parse ng-touched" rows={10} onChange={this.onDbChanged} placeholder="Db content in JSON, look at README for format">
            {JSON.stringify(options.db) || ''}
          </textarea>
        </div>
        <div className="gf-form">
          <span className="gf-form-label width-7">Offset</span>
          <input type="number" className="gf-form-input width-25 ng-pristine ng-untouched ng-valid ng-not-empty" onChange={this.onOffsetChanged} />
        </div>
      </div>
    );
  }
}