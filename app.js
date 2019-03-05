const express = require('express');
const app = express();

// setup template engine
app.set('view engine', 'ejs');

// setup static files
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3030, function(){
    console.log('Server started on port 3030');
});