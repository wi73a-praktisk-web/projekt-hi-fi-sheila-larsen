const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/product', function (req, res) {
        db.query('select * from products', function (err, data) {
            res.send(data);
        })
    })
}


