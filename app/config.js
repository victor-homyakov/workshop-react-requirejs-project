require.config({
  paths: {
    //'components': '../bower_components',
    'jquery': '../bower_components/jquery/dist/jquery',
    'jsx': '../bower_components/jsx-requirejs-plugin/js/jsx',
    'JSXTransformer': '../bower_components/jsx-requirejs-plugin/js/JSXTransformer',
    'text': '../bower_components/requirejs-text/text',
    'react': '../bower_components/react/react-with-addons'
  },
  jsx: {
    fileExtension: '.jsx'
  }
});

if (!window.requireTestMode) {
  require(['main'], function() {
  });
}
