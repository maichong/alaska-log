/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-09-13
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';
import Log from '../models/Log';

export default class Create extends alaska.Sled {

  async exec(data) {
    let log = new Log(data);
    await log.save();
    return log;
  }

}
