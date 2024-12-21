require("dotenv").config();
const app = require('./router');

const express = require('express');
const server = express();
server.use(express.json());
server.use(app);
const port = process.env.PORT || 4000;

// new modification
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})