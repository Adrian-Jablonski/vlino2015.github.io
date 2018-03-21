var express = require('express'); 

var app = express(); 

var dataFile = require('.app/data/data.json');

app.get('/', function(req, res) { 



//template strings - more flexible send command

var info = '';
dataFile.speakers.foreach(function(item){

    info += `
    
    <li>
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
    </li>
    `

    res.send(
        `
        Roux Academy Meetups</h1>
        ${info}
        
        `);
})

}); 

app.listen(3000, function(){ 

console.log('Example app listening on port 3000!'); 

}); 

