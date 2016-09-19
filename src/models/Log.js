/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-13
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

export default class Log extends alaska.Model {

  static label = 'Log';
  static icon = 'file-text-o';
  static title = 'title';
  static defaultColumns = '_id type level method title status time length createdAt';
  static defaultSort = '-_id';

  static fields = {
    title: {
      label: 'Title',
      type: String,
      required: true
    },
    type: {
      label: 'Type',
      type: String
    },
    level: {
      label: 'Level',
      type: 'select',
      options: [{
        label: 'Debug',
        value: 'debug'
      }, {
        label: 'Info',
        value: 'info'
      }, {
        label: 'Warning',
        value: 'warning'
      }, {
        label: 'Error',
        value: 'error'
      }, {
        label: 'Fatal',
        value: 'fatal'
      }]
    },
    method: {
      label: 'Method',
      type: String
    },
    time: {
      label: 'Time',
      type: Number,
      format: '0,0',
      addonAfter: 'milliseconds'
    },
    status: {
      label: 'Status',
      type: String
    },
    length: {
      label: 'Length',
      type: 'bytes',
      size: 1024
    },
    details: {
      label: 'Details',
      type: Object
    },
    createdAt: {
      label: 'Created At',
      type: Date
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
