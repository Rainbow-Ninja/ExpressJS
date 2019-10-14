const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// global.HttpError = class HTTPError extends Error {
//     constructor(code, message) {
//         super(message);
//         this.name = "HttpError";
//         this.statusCode = code;
//     }
// }

global.HttpError = class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.name = "HttpError";
        this.statusCode = statusCode;
    }
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middle ware function
app.use((req, res, next) => {
    // middleware functions have access to req and response objects
    console.log("URL", req.url);
    console.log("method", req.method);
    console.log("body", req.body || {});
    console.log("middle ware running");
    // invoke the next function in the request lifecycle
    next();
})

app.use(require("./routes"));

// capture the error coming from the routes
// error handling middleware
// app.use((err, req, res, next) =>{
//     // console.log("error logged", err);
//     if(err && err.name === "HttpError"){
//         return res.status(err.statusCode).send(err.message);
//     }
//     next();
// })
app.listen(port, () => console.log(`server running on port ${port}`));
