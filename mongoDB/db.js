const { MongoClient } = require("mongodb");

// Database contents
let dbConnection;

// Connect to MongoDB
const connectToDb = (cb) => {
  MongoClient.connect("")
    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.error(err);
      return cb(err);
    });
};

// Get Database
const getDb = () => dbConnection;

// Exports module
module.exports = { connectToDb, getDb };
