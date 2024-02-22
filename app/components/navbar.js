import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class NavbarComponent extends Component {
  @service store;
  @service session;

  userid = this.session.get('userId');

  logout = () => {
    let usercur = this.session.get('userId');
    this.session.set('userId', null);
    let record = this.store.peekRecord('user', usercur);

    if (record) {
      this.store.unloadRecord(record);
    }
  };
}
