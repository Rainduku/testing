const { TodoModel } = require("../models");

const getAllTodos = async ({ page, limit }) => {
    const offset = (page - 1) * limit;
  
    return TodoModel.findAll({
      attributes: ["id", "title", "description", "completed"],
      offset,
      limit: limit,
    });
};

const getTodoById = async (id) => {
    return TodoModel.findByPk(id, {
        attributes: ["id", "title", "description", "completed"],
    });
};


const createTodo = async ({ title, description, completed }) => {
  return TodoModel.create({
    title,
    description,
    completed,
  }, {
    returning: ["id", "title", "description", "completed"],
  });
};


const updateTodo = async (id, { title, description, completed }) => {
  return TodoModel.update(
    {
        title,
        description,
        completed,
    },
    {
        where: {
            id,
        }
    }
  )
};

const deleteTodo = async (id) => {
  return TodoModel.destroy({
    where: { id },
  });
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
