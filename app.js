`This module shows Moscow Time.`

const express = require('express')
const request = require('request');

const PORT = 8000;
app = express();


app.get('/', (_, res) => {
    url = "http://worldtimeapi.org/api/timezone/Europe/Moscow"
    request(url, (error, response, body) => {
        if (response && response.statusCode == 200) {
            res.send(JSON.parse(body).datetime.split('T')['1'].split('.')['0']);
        } else {
            res.send('No responce from worldtimeapi 404;)')
        }
    })
});

app.listen(PORT, () =>{ 
    console.log('You web app on: http://localhost:8000/');
});  