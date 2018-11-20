/**
 * Creates screenshot file name.
 *
 * @return {object}
 *   The 'browser' instance.
 */
exports.command = function savefullScreenShot(namePrefix = '', nameSuffix = '') {

  const _self = this;
  let nameComponents = [_self.currentTest.name, _self.capabilities.platform || _self.capabilities.platformName, _self.capabilities.browserName];
  if (namePrefix) {
    nameComponents.unshift(namePrefix);
  }
  if (nameSuffix) {
    nameComponents.push(nameSuffix);
  }
  const fileName = nameComponents.join('--').replace(/\s/g, '-');

  this.getElementSize('html', function (result) {
    const weirdBrowsers = ['firefox', 'Safari'];

    if (this.capabilities.browserName === 'chrome') {
      console.log(this);
    }
    // Bigger height is a workaround for Safari and Gecko Webdriver.
    const height = weirdBrowsers.indexOf(this.capabilities.browserName) < 0 ?
      result.value.height: result.value.height + 100;
    this.resizeWindow(Math.floor(result.value.width), Math.floor(height), function () {
      this.saveScreenshot('shots/' + this.currentTest.module + '/' + fileName + '.png');
    })
  });

  // Nightwatch doesn't like it when no actions are added in a command file.
  // https://github.com/nightwatchjs/nightwatch/issues/1792
  this.pause(1);

  return this;

};
