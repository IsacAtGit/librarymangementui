import Component from '@glimmer/component';
export default class ProductComponent extends Component {
  get productImage() {
    return this.args.book.image;
  }
}
