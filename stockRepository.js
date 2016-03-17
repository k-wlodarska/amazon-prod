var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/amazon';
var collection = null;

var collectionPromise = MongoClient
    .connect(url)
    .then(function(db) {
        return db.collection('db_wlodarska');
    });

module.exports = {
    findAll: function() {
        return collectionPromise.then(function(collection) {
            return collection.find({}).toArray();
        });
    },
    getCount: function(isbn) {
        console.log(typeof isbn);
        return collectionPromise.then(function(collection) {
            return collection.find({"isbn": isbn}).limit(1).next()
                .then(function(result) {
                    if(result)
                        return result.count;
                    return null;
                });
        });
    },
    stockUp: function(isbn, count) {
        return collectionPromise.then(function(collection) {
            return collection.updateOne(
                {isbn: isbn},
                {isbn: isbn, count: count},
                {upsert: true});
        });
    }
};