import { module, test } from 'qunit';

import { setupTest } from 'librarymangementui/tests/helpers';

module('Unit | Model | authors', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('authors', {});
    assert.ok(model);
  });
});
