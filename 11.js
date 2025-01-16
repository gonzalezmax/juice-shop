var urlParams = new URLSearchParams(window.location.search);
var asdf = urlParams.get('asdf');

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello to you " + asdf;
