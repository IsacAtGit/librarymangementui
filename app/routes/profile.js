import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ProfileRoute extends Route {
  @service session;
  @service store;
  async model() {
    let userId = this.session.get('userId');
    let user = await this.store.findRecord('users', userId);
    console.log(user);
    return { user };
  }
}
