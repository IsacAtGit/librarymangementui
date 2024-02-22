import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {
  @service store;
  @service session;
  async model() {
    let userid = this.session.get('userId');
    console.log(userid);
    console.log('index');
    return await this.store.findAll('books');
  }
}
