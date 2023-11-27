const { Router } = require("express")
const router = Router()
const metodosBd = require('../controllers/controllerBd')

router.post("/insert",metodosBd.insert)
router.get("/",metodosBd.get)
router.get("/:id",metodosBd.getId)
router.delete("/:id",metodosBd.deleted)
router.put("/:id",metodosBd.update)
router.delete("/reg/all",metodosBd.deleteAll)
module.exports = router;