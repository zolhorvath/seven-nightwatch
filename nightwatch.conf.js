// Enabling browserstack-automate node integration
require('browserstack-automate').Nightwatch();

// Rest of the configuration file remains unchanged
module.exports = (function(settings) {
  // settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));
