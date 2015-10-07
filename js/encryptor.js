var encryptor = {
  getCypher: function(message, password){
    return CryptoJS.AES.encrypt(message, password);
  },
  decodeCypher: function(secret, password){
    return CryptoJS.AES.decrypt(secret, password).toString(CryptoJS.enc.Utf8);
  }
}
