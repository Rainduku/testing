const { body, param, query } = require('express-validator');

const createTodo = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('completed').isBoolean().withMessage('Completed must be a boolean value'),
];
  
const updateTodo = [
  body('title').optional(),
  body('description').optional(),
  body('completed').optional().isBoolean().withMessage('Completed must be a boolean value'),
];

const getAllTodos = [
  query('page').optional().isInt().withMessage('Page must be an integer'),
  query('limit').optional().isInt().withMessage('Limit must be an integer'),
];

const getTodoById = [
  param('id').notEmpty().withMessage('ID is required').isInt().withMessage('ID must be an integer'),
];

const deleteTodo = [
  param('id').notEmpty().withMessage('ID is required').isInt().withMessage('ID must be an integer'),
];

module.exports = {
    createTodo,
    updateTodo,
    getAllTodos,
    getTodoById,
    deleteTodo,

}