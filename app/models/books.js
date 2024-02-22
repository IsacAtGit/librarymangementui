import Model, { attr } from '@ember-data/model';

export default class BooksModel extends Model {
  @attr title;
  @attr stock;
  @attr price;
  @attr genre;
  @attr description;
  @attr author_id;
  @attr isbn;
  @attr image;
}
