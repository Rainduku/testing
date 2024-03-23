const express = require("express");
const routes = require("./routes");
const { port, api } = require("./config");
const { morganMiddleware, errorHandler } = require("./middlewares");

const app = express();

app.use(morganMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(`/${api}`, routes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})