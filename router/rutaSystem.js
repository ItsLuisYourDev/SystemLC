const { Router } = require("express")
const router = Router()
const miApps = require("../controllers/appController")

router.get("/pass",miApps.passwordGereator)
router.get("/apagarPc",miApps.offPc)
router.post("/pass",miApps.passwordGereator)
router.post("/inser",miApps.insertar)

router.get("/", (req, res) => {
    //res.send("<h1>hola<h1>")
    //res.render("../view/index.ejs",{Nombre:"Luis"}
    
    res.render("../view/index.ejs",
        {
            Nombre: "Luis",
            pageTitle: "LC"
        }
    )
})
router.get("/login",(req,res)=>{
    
    res.render("../view/login.ejs",
    
        {
            Nombre: "Luis",
            pageTitle: "LC"
        }
    )
})


router.get("/programas", (req, res) => {
    res.render("../view/programas/index.ejs",
        { pageTitle: "programs" })
})
router.get("/algoritmos", (req, res) => {
    res.render("../view/algoritmos/index.ejs",
        { pageTitle: "algorithms" })
})

module.exports = router
