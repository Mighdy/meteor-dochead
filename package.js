Package.describe({
  name: 'mighdy:dochead',
  summary: 'Isomorphic way to manipulate document.head for Meteor apps',
  version: '1.5.2',
  git: 'https://github.com/Mighdy/meteor-dochead.git'
});

Npm.depends({
  'load-script': '1.0.0'
});

var configure = function(api) {
  api.versionsFrom('1.3');
  api.use(['ecmascript', 'tracker']);
  api.use('mighdy:flow-router-ssr@3.13.1', ['client', 'server'], {weak: true});

  api.addFiles('main.js', 'client');
  api.addFiles('lib/both.js', ['client', 'server']);
  api.addFiles('lib/flow_router.js', ['client']);
};

Package.onUse(function(api) {
  configure(api);
  api.export('DocHead');
});

Package.onTest(function(api) {
  api.addFiles('test/init.js', 'server');
  configure(api);
  api.use(['react', 'tinytest', 'random', 'tracker', 'underscore']);

  api.addAssets('test/fakescript.js', 'client');
  api.addFiles('test/client.js', 'client');
  api.addFiles('test/server.js', 'server');
});
