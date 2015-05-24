var uri = "http://w3schools.com/my test.asp?name=ståle&car=saab";
var uri_enc = encodeURIComponent(uri);
var uri_dec = decodeURIComponent(uri_enc);
console.log(uri_enc);
console.log(uri_dec);