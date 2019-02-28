var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017';

var _connection = null;

var open = function() {
  MongoClient.connect(dburl, { useNewUrlParser: true }, function(err, client) {
    if (err) {
      console.log("DB connection failed");
      return;
    }
    var db = client.db('meanhotel');
    _connection = db;
    console.log("DB connection open");
  });
};

var get = function() {
  return _connection;
};

module.exports = {
  open : open,
  get : get
};