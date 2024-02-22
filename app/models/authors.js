import Model, { attr } from '@ember-data/model';

export default class AuthorsModel extends Model {
  @attr first_name;
  @attr last_name;
}
