import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class BookeditController extends Controller {
  @service router;

  @action
  async productEdit(event) {
    event.preventDefault();

    const productId = event.target.elements.productId.value;
    const url = `http://localhost:3000/books/${productId}`;

    try {
      let response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: this.image,
          title: this.title,
          description: this.description,
          price: this.price,
          stock: this.stock,
          genre: this.genre,
          author_id: this.author_id,
          isbn: this.isbn,
        }),
      });

      if (response.ok) {
        this.router.transitionTo('admin');
      } else {
        console.log('Invalid');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
