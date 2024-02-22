import { module, test } from 'qunit';
import { setupTest } from 'librarymangementui/tests/helpers';

module('Unit | Route | bookcreate', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bookcreate');
    assert.ok(route);
  });
});
