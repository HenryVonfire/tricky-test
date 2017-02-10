import { test } from 'qunit';
import moduleForAcceptance from 'tricky-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /application', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
