const { Router } = require("express");
const router = Router();

router.get("/atedimento", (req, res) => {
    res.send("Listagem de atedimento");
})

router.post("/atedimento", (req,res) => {
    res.send("Novas Listagem");
}) 

router.put("/atedimento/:id", (req,res) => {
    const { id } = req.params;
    res.send(`Atualizando atedimento ${id}` );
}) 

router.delete("/atedimento/:id", (req,res) => {
    const { id } = req.params;
    res.send(`Deletando atedimento ${id}`);
}) 

module.exports = router;    