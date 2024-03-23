const { Router } = require("express");
const { todoControllers } = require("../controllers");
const { validator } = require("../middlewares");

const router = Router();
const { validate, requirements } = validator;

router.get(
  "/",
  requirements.getAllTodos,
  validate,
  todoControllers.getAllTodos
);

router.post(
  "/",
  requirements.createTodo,
  validate,
  todoControllers.createTodo
);

router.get(
  "/:id",
  requirements.getTodoById,
  validate,
  todoControllers.getTodoById
);

router.put(
  "/:id",
  requirements.updateTodo,
  validate,
  todoControllers.updateTodo
);

router.delete(
  "/:id",
  requirements.deleteTodo,
  validate,
  todoControllers.deleteTodo
);

module.exports = router;
