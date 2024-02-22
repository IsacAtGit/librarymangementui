import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';
export default class BookeditRoute extends Route {
  @service store;
  model(params) {
    const { id } = params;
    return this.store.peekRecord('books', id);
  }
}
