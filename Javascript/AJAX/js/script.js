"use strict";

(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas";
	var apiKey = "9361bd03ec7175e9eea92fdf7a717518"; // Replace "APIKEY" with your own API key
	var httpRequest;
	makeRequest();

	// create and send an XHR request
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey);
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			console.log(httpRequest.responseText);
		}
	}
})();