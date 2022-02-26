var express = require("express");
const personajesCtrl = require("../controllers/crudPersonajes.controllers");
const auth = require("../middlewares/auth.middlewares");

const router = express.Router();

router.get("/characters", auth.isAuth, personajesCtrl.getAllPersonajes);
router.get("/charactersAll", auth.isAuth, personajesCtrl.getPersonajesAll);
router.get("/characters/:id", auth.isAuth, personajesCtrl.getPersonaje);
router.post("/characters", auth.isAuth, personajesCtrl.createPersonaje);
router.delete("/characters/:id", auth.isAuth, personajesCtrl.deletePersonaje);
router.put("/characters/:id", auth.isAuth, personajesCtrl.updatePersonaje);

module.exports = router;
