"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = (req, res) => {
    console.log('Got the Function!');
    req.getConnection(function (err, connection) {
        if (err)
            console.log(err);
        console.log('connected');
        connection.query('SELECT COUNT(*), Parent_Entity_Name FROM relationships GROUP BY Parent_Entity_Name', [], function (err, results) {
            // if (err) return next(err);
            res.send(results);
        });
    });
};
exports.children = function (req, res, next) {
    var name = req.params.name;
    console.log(name);
    req.getConnection(function (err, connection) {
        if (err)
            return next(err);
        connection.query("SELECT * FROM relationships WHERE Parent_Entity_Name = ? ORDER BY Entity_Name", [name], function (err, results) {
            if (err)
                return next(err);
            res.send(results);
        });
    });
};
//# sourceMappingURL=relationship.js.map