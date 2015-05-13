Package.describe({
  name: 'nerdmed:jquery-resize',
  version: '0.5.3',
  // Brief, one-line summary of the package.
  summary: 'A Cross-Browser, Event-based, Element Resize Detection.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nerdmed/jquery-resize-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', 'client');
  api.addFiles('jquery-resize.js','client');
});

