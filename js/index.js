var encoder = {
  setMessage: function() {
    this.message = document.getElementById("message").value;
  },
  getPassword: function() {
    this.password = prompt("What pass phrase will protect this message?");
  },
  setUrl: function() {
    var instructions = "Your encrypted message is available to anyone with the passphrase at:\n\n";
    this.newUrl = instructions + window.location.href + "?" + this.encrypt();
  },
  replaceMessageWithUrl: function () {
    document.getElementById("message").value=this.newUrl;
  },
  encrypt: function() {
    return encryptor.getCypher(this.message, this.password);
  },
  protect: function() {
    this.setMessage()
    this.getPassword()
    this.setUrl()
    this.replaceMessageWithUrl()
  }
}
var decoder = {
  setHash: function() {
    this.secret = window.location.search.substring(1);
  },
  getPassword: function() {
    this.password = prompt("Please enter the pass phrase.");
  },
  decrypt: function() {
    this.setHash();
    this.getPassword();
    this.plainMessage = encryptor.decodeCypher(this.secret, this.password);
    alert(this.plainMessage);
  }
}
var checkPage = function(){
  if(window.location.href.includes('?')){
    document.getElementById("header").innerHTML = "Message Decoder";
    document.getElementById("p1").innerHTML = "This URL contains a securly encrypted method.";
    document.getElementById("p2").innerHTML = "Are you ready to enter your pass phrase?";
    var textArea = document.getElementById("message");
    var oldButton = document.getElementById("encrypt");
    var parent = document.getElementById("inputDiv");
    parent.removeChild(textArea);
    parent.removeChild(oldButton);
    var newButton = document.createElement("button");
    newButton.innerHTML = "Decrypt";
    newButton.setAttribute("id", "decrypt");
    newButton.setAttribute("onclick", "decoder.decrypt()");
    parent.appendChild(newButton);
  }
};
checkPage();
