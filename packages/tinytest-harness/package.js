Package.describe({
  name: 'tinytest-harness',
  version: '0.0.1',
  summary: 'In development, lets your app define Tinytests, run them and see results',
  documentation: null
});

Package.onUse(function(api) {
  api.imply('tinytest');
  api.imply('test-helpers');
  api.imply('test-in-browser');
});
