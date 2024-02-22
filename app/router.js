import EmberRouter from '@ember/routing/router';
import config from 'librarymangementui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cart', { path: 'shopping-cart' });
  this.route('login');
  this.route('signup-form');
  this.route('item', { path: 'item/:item_id' }); //{item-id:1}
  this.route('notfound', { path: '/*path' });
  this.route('profile');
  this.route('admin');
  this.route('bookcreate');
  this.route('bookedit', { path: 'bookedit/:id' });
});
