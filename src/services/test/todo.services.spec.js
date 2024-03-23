const mockResources = require('./mockResources');
const { todoRepositories } = require('../../repositories'); 
const todoServices = require('../todo.services');

describe('TodoService', () => {
    describe('createTodo', () => {
        it('should return to-do created', async () => {
            // Arrange
            const { POSITIVE_CASE_INPUT, POSITIVE_CASE_OUTPUT } = mockResources.TodoService.createTodo;

            todoRepositories.createTodo = jest.fn().mockResolvedValue(POSITIVE_CASE_OUTPUT);

            // Act
            const result = await todoServices.createTodo(POSITIVE_CASE_INPUT);

            // Assert
            expect(result).toEqual(POSITIVE_CASE_OUTPUT);
            expect(todoRepositories.createTodo).toHaveBeenCalledTimes(1);
            expect(todoRepositories.createTodo).toHaveBeenCalledWith(POSITIVE_CASE_INPUT);
        });
    });

    describe('getAllTodos', () => {
        it('should return list of to-do', async () => {
            // Arrange
            const { POSITIVE_CASE_INPUT, POSITIVE_CASE_OUTPUT } = mockResources.TodoService.getAllTodos;

            todoRepositories.getAllTodos = jest.fn().mockResolvedValue(POSITIVE_CASE_OUTPUT);

            // Act
            const result = await todoServices.getAllTodos(POSITIVE_CASE_INPUT);

            // Assert
            expect(result).toEqual(POSITIVE_CASE_OUTPUT);
            expect(todoRepositories.getAllTodos).toHaveBeenCalledTimes(1);
            expect(todoRepositories.getAllTodos).toHaveBeenCalledWith(POSITIVE_CASE_INPUT);
        });
    });

    describe('getTodoById', () => {
        it('should return to-do details', async () => {
            // Arrange
            const { POSITIVE_CASE_INPUT, POSITIVE_CASE_OUTPUT } = mockResources.TodoService.getTodoById;

            todoRepositories.getTodoById = jest.fn().mockResolvedValue(POSITIVE_CASE_OUTPUT);

            // Act
            const result = await todoServices.getTodoById(POSITIVE_CASE_INPUT);

            // Assert
            expect(result).toEqual(POSITIVE_CASE_OUTPUT);
            expect(todoRepositories.getTodoById).toHaveBeenCalledTimes(1);
            expect(todoRepositories.getTodoById).toHaveBeenCalledWith(POSITIVE_CASE_INPUT);
        });
    });

    describe('updateTodo', () => {
        it('should update a todo and display it', async () => {
            // Arrange
            const { POSITIVE_CASE_INPUT, POSITIVE_CASE_OUTPUT } = mockResources.TodoService.updateTodo;

            todoRepositories.updateTodo = jest.fn().mockResolvedValue(POSITIVE_CASE_OUTPUT);
            todoRepositories.getTodoById = jest.fn().mockResolvedValue(POSITIVE_CASE_OUTPUT.data);

            // Act
            const result = await todoServices.updateTodo(POSITIVE_CASE_INPUT.id, POSITIVE_CASE_INPUT.updateData);

            // Assert
            expect(result).toEqual(POSITIVE_CASE_OUTPUT.data);
            expect(todoRepositories.updateTodo).toHaveBeenCalledTimes(1);
            expect(todoRepositories.updateTodo).toHaveBeenCalledWith(POSITIVE_CASE_INPUT.id, POSITIVE_CASE_INPUT.updateData);
            expect(todoRepositories.getTodoById).toHaveBeenCalledWith(POSITIVE_CASE_INPUT.id);
        });
    });

    describe('deleteTodo', () => {
        it('it should delete a to-do activity', async () => {
            // Arrange
            const { POSITIVE_CASE_INPUT, POSITIVE_CASE_OUTPUT } = mockResources.TodoService.deleteTodo;

            todoRepositories.deleteTodo = jest.fn().mockResolvedValue(POSITIVE_CASE_OUTPUT);

            // Act
            const result = await todoServices.deleteTodo(POSITIVE_CASE_INPUT);

            // Assert
            expect(result).toEqual(POSITIVE_CASE_OUTPUT);
            expect(todoRepositories.deleteTodo).toHaveBeenCalledTimes(1);
            expect(todoRepositories.deleteTodo).toHaveBeenCalledWith(POSITIVE_CASE_INPUT);
        });
    });

});