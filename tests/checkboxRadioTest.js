module.exports = {
  beforeEach: function (browser, done) {
    browser.resizeWindow(1024, 800, done);
  },
  'Checked states' : function (browser) {
    browser
      .url(browser.launchUrl + '/contact/checkbox_radio')
      .click('[name="field_checkbox[value]"]')
      .click('[name="field_checkboxes[first]"]')
      .click('[name="field_checkboxes[second]"]')
      .click('[name="field_checkboxes[third]"]')
      .click('[name="field_radios"][value="second"]')
      .pause(300);
    browser
      .savefullScreenShot('01')
      .end();
  },
  'Error states' : function (browser) {
    browser
      .url(browser.launchUrl + '/contact/checkbox_radio')
      .click('[name="field_checkbox[value]"]')
      .submitForm('form.contact-message-checkbox-radio-form');
    browser
      .waitForElementPresent('.messages--error', 2000);
    browser.savefullScreenShot('02').end();
  }
};
