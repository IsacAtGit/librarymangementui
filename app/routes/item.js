import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ItemRoute extends Route {
  @service store;
  async model(parms) {
    const { item_id } = parms;
    const data = await this.store.findAll('books');
    const authorslist = await this.store.findAll('authors');
    // console.log("Data:", data);
    // console.log("Authors List:", authorslist);
    const bookDetails = data.find(({ id }) => id === item_id);
    // console.log("Book Details:", bookDetails);
    // console.log(bookDetails.author_id)
    const authorDetails = authorslist.find(
      ({ id }) => id == bookDetails.author_id,
    );
    // console.log("Author Details:", authorDetails);
    return { bookDetails, authorDetails };
  }
}
