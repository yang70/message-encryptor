var sw = require('selenium-webdriver');
var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build()

var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));

describe("messages are working", function(){
  it('should encrypt and decrypt', function(){
    driver.get('../index.html');
    driver.find_element(:id, "message").sendKeys("Test message");
    driver.find_element(:id, "encrypt").click();
  })
})
