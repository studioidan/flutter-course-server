const consts = require('./consts');
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');


app.use(express.static('public'))

// middleware
app.use(bodyParser.json({limit: '50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'})); // for parsing


app.use('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username !== 'flutter' || password !== '1234') {
        res.status(402).send('Username or password is incorrect');
        return;
    }

    res.json({token: consts.TOKEN});
});

app.use((req, res, next) => {
    console.log(req.headers);
    const token = req.headers.token;
    if (!token) {
        res.status(403).send('no token supplied');
        return;
    }
    if (token !== consts.TOKEN) {
        res.status(403).send('invalid token');
        return;
    }
    next();
});

app.use('/api', require('./routes/main-routes'));


// Error handler
app.use(async (err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    // respond to client
    res.status(status)
        .json({
            error: {
                message: error.message
            }
        });

    //respond to ourselves
    console.error(err);
});


// Start server
const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`server is listening on port ${port}`));

app.listen(port, function () {
    console.log(`server is listening on port ${port}`)
});
