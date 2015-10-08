var expect = require('chai').expect;
var encryptor = require('../js/encryptor');

describe("the encryptor and decryptor methods are working", function(){
  it('should encrypt and decrypt', function(){
    var message = "Test message."
    var password = "password"
    console.log(encryptor)
    var cypher = encryptor.getCypher(message, password);
    expect(cypher).to.not.equal(message);
    var decryptedMessage = encryptor.decodeCypher(cypher, password);
    expect(decryptedMessage).to.equal(message);
  })
})
