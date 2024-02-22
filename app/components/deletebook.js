import Component from '@glimmer/component';

import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DeletebookComponent extends Component {
    @service store;
    @service router;

  @action
  async deleteBook(productId) {
    console.log(productId);
    try {
      let products = await this.store.findRecord('books', productId, {
        backgroundReload: false,
      });
      await products.destroyRecord();
      this.router.transitionTo('admin');
    } catch (error) {
    //   console.log(error);
    this.router.transitionTo('admin');
    }
  }
}
