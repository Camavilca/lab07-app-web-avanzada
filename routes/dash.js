var express = require('express');
var router = express.Router();

//localhost:3000/dash/
router.get('/', function (req, res, next) {
    const datos = {
        "nombres": "Orlando",
        "apellido": "Camavilca Chavez"
    }

    res.render('dashboard', datos, (err, html) => {
        res.render('layout', {
            "seccion": html
        });
    });
});

module.exports = router;
