// 1. IMPORTACIONES
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// 2. RUTEO
router.get("/", (req, res) => {
    res.send("Hola mundo");
})

router.get("/contacto", (req, res) => {
    res.send("Contacto");
})

router.get("/prueba", (req, res) => {
    res.send("Prueba");
})

router.get("/perrito", (req, res) => {
    res.render("index");
})

// 3. EXPORTACION
module.exports = router;