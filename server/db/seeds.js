
use co2Data;
db.dropDatabase();

db.carbon.insertOne({
  car: '0',
  train: '0',
  bus:'0',
  bike:'0',
  meat: '0'
});
