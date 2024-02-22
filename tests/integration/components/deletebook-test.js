import { module, test } from 'qunit';
import { setupRenderingTest } from 'librarymangementui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | deletebook', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Deletebook />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Deletebook>
        template block text
      </Deletebook>
    `);

    assert.dom().hasText('template block text');
  });
});
