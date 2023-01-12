const router = require("express").Router();
const user = require("../controllers/users.controllers");
const volunteer = require('../controllers/volunteers.controllers')

//USER

router.post("/user-register", user.register)
router.post("/setAvatar", user.setAvatar)
router.post("/user-update", user.update)
router.get("/increaseStrike/:id", user.increaseStrikes)
router.get("/resetStrikes", user.resetStrikes)
router.get("/getUser/:id", user.getUserData)

//VOLUNTEER / TECNIC

router.post("/login", volunteer.login )
router.get("/volunteer/:id", volunteer.getvolunteerData)
router.post("/volunteer-register", volunteer.register)
router.get("/getLogged", volunteer.getLogged)



module.exports = router;