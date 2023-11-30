var fs = require('fs');
db = db.getSiblingDB('agenda_saramago');

db.createCollection('company');
var data = fs.readFileSync('./data/company.json')
var docs = JSON.parse(data.toString())
db.event.insertMany(docs)
console.log('\nCOMPANY INSERTED')