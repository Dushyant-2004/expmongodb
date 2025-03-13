// making of mongoDB connection
// making of express server and connecting it to mongoDB

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


main ()
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/whatsapp', );
}


app.get('/', (req, res) => {
    res.send('app is working');
}
);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});