import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class BookcreateController extends Controller {
  @service router;
  @action
  async productCreate(event) {
    event.preventDefault();
    try {
      let response = await fetch('http://localhost:3000/books', {
        method: 'POST',
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
