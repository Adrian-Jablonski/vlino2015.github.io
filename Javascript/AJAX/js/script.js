"use strict";

(function() {

	//this part of the documentation
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas";
	var apiKey = "9361bd03ec7175e9eea92fdf7a717518"; // Replace "APIKEY" with your own API key
	
	var httpRequest;
	
    
	makeRequest();
  
	// create and send an XHR request
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod();
		httpRequest.open('GET', url + '&appid=' + apiKey);  //opening up communication
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
            console.log(httpRequest.responseText);
            
            if (httpRequest.status === 200) {

                //responseText is your json string
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
		}
    }

    // handle XHR success
	function updateUISuccess(responseText) {

        //response is an object 
        var response = JSON.parse(httpRequest.responseText);
        console.log(response);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
	}


    // handle XHR success

    // handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		weatherBox.className = "hidden";
	}
	

    

})();