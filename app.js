const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send('Hello World!');
});
app.post();
app.put();
app.delete();


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});