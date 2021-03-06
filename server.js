const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const webprojects = require('./routes/api/webproj');
const interdisprojects = require('./routes/api/interdisproj');

const app = express();

var db;

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
if(process.env.NODE_ENV === 'production'){
    db = 'mongodb+srv://'+process.env.personal_web_mongodb_user + ':' + process.env.personal_web_mongodb_pass + '@' + process.env.personal_web_mongodb_ref_url; 
} else {
    db = require('./config/keys').mongoURI;
}

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/webproj', webprojects);
app.use('/api/interdisproj', interdisprojects);

// Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port '+ port));