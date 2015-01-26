// to depend on a bower installed component:
// define(['../bower_components/componentName/file'])

define(['jquery', 'react', 'jsx!Version'], function($, React, Version) {
  //$('body').append('jQuery ' + $.fn.jquery + ', React ' + React.version);
  React.render(React.createElement(Version), document.getElementById('container'));
});
