const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const initializeServer = port => {
  try {
    const server = express();
    server.use(cors());
    server.use(express.json({ extended: false, limit: '20mb' }));
      server.post("/testing", async (req, res) => {
          console.log(req)
          res.status(200).send({ "challenge": `${req.body.challenge}` });
    })
    server.listen(port, () => console.log(`Server instance listening @port: ${port}`));
    return server;
  } catch (err) {
    console.log('Unable to initialize server:', err);
  }
};

module.exports = initializeServer(5000);