const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/categories', function (req, res) {
        db.query('select * from categories', function (err, data) {
            res.send(data);
        })
    })
}

