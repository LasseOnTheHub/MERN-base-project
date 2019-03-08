const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const env = require("./config/config");

// Routers
const indexRouter = require("./routes/index");

// App configuration
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
app.disable("etag");

//router(app);
app.use("/api", indexRouter);

// Server configuration
// Listening port
const port = env.expressport;
const server = http.createServer(app);
server.listen(port);
console.log("Backend started on port:", port);
