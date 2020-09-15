const express = require("express");
const router = express.Router();
const { addNumber, subNumber, mulNumber, divNumber } = require("../operations");

router.post("/add", addNumber);
router.post("/sub", subNumber);
router.post("/multiply", mulNumber);
router.post("/divide", divNumber);

module.exports = router;
