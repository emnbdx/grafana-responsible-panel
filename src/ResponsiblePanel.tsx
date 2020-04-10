import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { Option } from 'types';

interface Props extends PanelProps<Option> {}

export class ResponsiblePanel extends PureComponent<Props> {
  currentWorkingDay(end: Date) {
    // This makes no effort to account for holidays
    // Counts end day, does not count start day

    var currentYear = new Date().getFullYear();
    var start = new Date(currentYear, 1, 1);

    // initial total
    var totalBusinessDays = 0;

    // normalize both start and end to beginning of the day
    start.setHours(0,0,0,0);
    end.setHours(0,0,0,0);

    var current = new Date(start);
    current.setDate(current.getDate() + 1);
    var day;
    // loop through each day, checking
    while (current <= end) {
        day = current.getDay();
        if (day >= 1 && day <= 5) {
            ++totalBusinessDays;
        }
        current.setDate(current.getDate() + 1);
    }

    return totalBusinessDays;
  }
  
  render() {
    const { options } = this.props;
    
    var db = JSON.parse(JSON.stringify(options.db));
    var currentDay = this.currentWorkingDay(new Date());
    var responsible = db.responsibles[(currentDay + options.offset)%db.responsibles.length];

    return (
      <div style={{
        height: '100%',
        textAlign: 'center',
      }}>
        <img src={responsible.url} height="80%"></img>
        <div>{responsible.name}</div>
      </div>
    );
  }
}
