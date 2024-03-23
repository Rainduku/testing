const { todoRepositories } = require("../repositories");

async function getAllTodos({ page = 1, limit = 10 }) {
  try {
    return await todoRepositories.getAllTodos({
        page,
        limit,
    });
  } catch (error) {
    throw new Error('Error getting todos from repository: ' + error.message);
  }
}

async function getTodoById(id) {
  try {
    const todo = await todoRepositories.getTodoById(id);
    if (!todo) {
        throw new Error("To do activity not found")
    }
    return todo;
  } catch (error) {
    throw new Error('Error getting todo by ID from repository: ' + error.message);
  }
}

async function createTodo({ title, description, completed}) {
  if (!title || typeof completed !== 'boolean') {
    throw new Error('Invalid todo data');
  }

  try {
    return await todoRepositories.createTodo({
        title,
        description,
        completed,
    })
  } catch (error) {
    throw new Error('Error creating todo in repository: ' + error.message);
  }
}

async function updateTodo(id, { title, description, completed}) {
  try {
    const updatedTodo = await todoRepositories.updateTodo(id, {
        title,
        description,
        completed,
    });
    if (!updatedTodo || updatedTodo[0] === 0) {
      throw new Error('Todo not found or not updated');
    }
    const todo = await todoRepositories.getTodoById(id);
    return todo;
  } catch (error) {
    throw new Error('Error updating todo in repository: ' + error.message);
  }
}

async function deleteTodo(id) {
  try {
    const result = await todoRepositories.deleteTodo(id);
    if (result[0] === 0) {
      throw new Error('Todo not found');
    }
    return result;
  } catch (error) {
    throw new Error('Error deleting todo in repository: ' + error.message);
  }
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
