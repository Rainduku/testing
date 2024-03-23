const { todoServices } = require("../services");

async function getAllTodos(req, res, next) {
  try {
    const result = await todoServices.getAllTodos(req.query);
    res.json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

async function getTodoById(req, res, next) {
  const id = req.params.id;

  try {
    const result = await todoServices.getTodoById(id);
    res.json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

async function createTodo(req, res, next) {
  const { title, description, completed } = req.body;

  try {
    const result = await todoServices.createTodo({ title, description, completed });
    res.json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

async function updateTodo(req, res, next) {
  const id = req.params.id;
  const { title, description, completed } = req.body;

  try {
    const updatedTodo = await todoServices.updateTodo(id, { title, description, completed });
    res.status(200).json({
      status: 'success',
      data: updatedTodo,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteTodo(req, res, next) {
  const id = req.params.id;

  try {
    const result = await todoServices.deleteTodo(id);
    res.json({
      status: 'Successfully deleted'
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
