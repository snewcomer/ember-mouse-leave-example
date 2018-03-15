import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mouse-leave', function(hooks) {
  setupRenderingTest(hooks);

  test('scott it renders', async function(assert) {
    await render(hbs`{{mouse-leave}}`);
    assert.equal(this.element.textContent.trim(), 'HI');
    await render(hbs`{{mouse-leave isVisible=false}}`);
    assert.equal(this.element.textContent.trim(), '');
  });
});
