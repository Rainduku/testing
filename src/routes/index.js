const { Router } = require("express");
const todoRoutes = require("./todo.routes");

const router = Router();

router.use("/todo", todoRoutes);

module.exports = router;
