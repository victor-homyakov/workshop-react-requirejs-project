define(function() {
  QUnit.start();
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  /* require your app components
   * for example, if you have /app/modules/doSomething.js, you can
   * require(['modules/doSomething'], function(theModule) {
   *   // test the things
   * });
   */

  module('jQuery');

  test('is a function', function() {
    expect(1);
    stop();
    require(['jquery'], function($) {
      start();
      strictEqual(typeof $, 'function', 'is a function');
    });
  });

  module('Version');

  test('is rendered', function() {
    expect(1);
    stop();
    require(['jquery', 'react', 'jsx!Version'], function($, React, Version) {
      start();
      var $container = $('#qunit-fixture');
      React.render(React.createElement(Version), $container[0]);
      equal($container.text(), 'jQuery 2.1.3, React 0.12.2', 'rendered properly');
    });
  });

});
