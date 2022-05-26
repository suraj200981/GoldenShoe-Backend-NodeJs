const express = require('express');
const app = express();


const userRoute = require('./routes/User');
app.use('/user', userRoute);


app.listen(3000, () => {
    console.log('Started on localhost:3000');
});

