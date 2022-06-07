// const { response } = require('express');
let Express = require('express');

const app = Express();

app.get('/', (request, response) => {
    response.send("hello, world!");
});

app.listen(3000, (err) => {
    if (!err) {
        console.log("Server's start by http://localhost:3000/");
    } else {
        console.log(err);
    }
})