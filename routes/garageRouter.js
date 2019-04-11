let express = require('express');
let router = express.Router();
let garageController = require("../controllers/garageController");

router.get("/cars", garageController.getCarsInGarage ); //rout для получить тек машины в гараже
/*
router.put("/cars", garageController.removeCarFromGarage); //обновить документ с новым числом машин в гараже
*/

module.exports = router;