require("dotenv").config();
const mainRouter = require("./src/router/index");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const xss = require("xss-clean");
const app = express();
const commonHelper = require("./src/helper/common");

// Configure express
app.use(express.json());
app.use(cors({
    methods: ["GET", "PUT", "POST", "DELETE"],
    origin: [`https://ankasa2023.vercel.app`]
}));
app.use(morgan("dev"));
app.use(helmet());
app.use(xss());
app.use("/img", express.static("src/upload"));

// Port choice
const port = process.env.PORT || 443;

// Main router
app.use("/", mainRouter);
app.all("*", (req, res, next) => {
    next(commonHelper.response(res, null, 404, "URL not Found"));
});

// Error code and message
app.use((err, req, res, next) => { // eslint-disable-line
    const errorMessage = err.message || "Internal server error";
    const statusCode = err.status || 500;

    // Convert multer file too large message to common helper
    if (errorMessage == "File too large") {
        commonHelper.response(res, null, 413, "File too large (Max. 2MB)");
    } else {
        commonHelper.response(res, null, statusCode, errorMessage);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server internal port : ${port}`);
});
