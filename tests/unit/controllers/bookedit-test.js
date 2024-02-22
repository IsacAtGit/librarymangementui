import { module, test } from 'qunit';
import { setupTest } from 'librarymangementui/tests/helpers';

module('Unit | Controller | bookedit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:bookedit');
    assert.ok(controller);
  });
});
