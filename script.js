var request = new XMLHttpRequest();

request.open('GET', 'http://newsapi.org/v2/top-headlines?country=us&apiKey=b487fd06bd424e288f82cec72ff4977b');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    
}

request.send();