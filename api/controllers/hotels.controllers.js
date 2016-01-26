var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {

  console.log('GET the hotels');
  console.log(req.query);

  var returnData;
  var offset = 0;
  var count = 5;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  returnData = hotelData.slice(offset,offset+count);

  res
    .status(200)
    .json(returnData);
};

module.exports.hotelsGetOne = function(req, res) {
  console.log('GET hotelId', req.params.hotelId);
  res
    .status(200)
    .json(hotelData[req.params.hotelId]);
};

module.exports.hotelsAddOne = function(req, res) {
  console.log("POST new hotel");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};