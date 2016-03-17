module.exports = function(stockRepository) {
    return {
        findAll: function (req, res, next) {
            stockRepository().findAll().then(function (docs) {
                res.json(docs);
            }).catch(next);
        },
        getCounter: function (req, res, next) {
            var isbn = req.params.isbn;

            stockRepository().getCount(isbn).then(function (result) {
                if (result !== null)
                    res.status(200).json({count: result});
                else
                    next();
            }).catch(next);
        },
        stockUp: function (req, res, next) {
            var isbn = req.body.isbn;
            var count = req.body.count;

            stockRepository().stockUp(isbn, count).then(function () {
                res.json({isbn: req.body.isbn, count: req.body.count});
            }).catch(next);
        }
    };
};