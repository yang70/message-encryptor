var encoder = {
  setMessage: function() {
    this.message = document.getElementById("message").value;
  },
  getPassword: function() {
    this.password = prompt("What pass phrase will protect this message?");
    while(!this.password){
      this.password = prompt("Password cannot be blank.\n\nWhat pass phrase will protect this message?");
    }
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
    console.log(this)
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
    while(!this.password){
      this.password = prompt("Password cannot be blank.\n\nWhat pass phrase will protect this message?");
    }
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
    parent.appendChild(newButton);
    newButton.addEventListener("click", decoder.decrypt.bind(decoder), false);
  }
};
checkPage();

window.addEventListener("DOMContentLoaded", function(){
  document.getElementById("encrypt")
    .addEventListener("click", encoder.protect.bind(encoder), false);
}, false);

