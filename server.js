const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');


// middleware
app.use(bodyParser.json({limit: '50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'})); // for parsing


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
