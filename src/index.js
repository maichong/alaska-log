/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-13
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

class LogService extends alaska.Service {
  constructor(options) {
    options = options || {};
    options.dir = options.dir || __dirname;
    options.id = options.id || 'alaska-log';
    super(options);
  }
}

export default new LogService();
