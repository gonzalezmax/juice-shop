const urlParams = new URLSearchParams(window.location.search);
const asdf = urlParams.get('asdf');

const unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello to you " + asdf;
