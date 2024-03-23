// mockResources.js

const mockResources = {
    TodoService: {
      getAllTodos: {
        POSITIVE_CASE_INPUT: {
          page: 1,
          limit: 5,
        },
        POSITIVE_CASE_OUTPUT: {
            status: 'success',
            data: [
              {
                id: 2,
                title: 'Attend team meeting',
                description: 'Join the team meeting to discuss project updates and roadblocks.',
                completed: true,
              },
              {
                id: 3,
                title: 'Prepare presentation slides',
                description: 'Create slides for the client presentation scheduled next week.',
                completed: false,
              },
              {
                id: 4,
                title: 'Review code changes',
                description: 'Go through the recent code changes and provide feedback.',
                completed: true,
              },
              {
                id: 5,
                title: 'Submit expense reports',
                description: 'Submit the expense reports for the business trip last month.',
                completed: false,
              },
              {
                id: 6,
                title: 'Call with a client',
                description: 'Schedule and conduct a call with a key client to discuss project progress.',
                completed: false,
              },
            ],
          },
      },
      getTodoById: {
        POSITIVE_CASE_INPUT: 1,
        POSITIVE_CASE_OUTPUT: {
          status: 'success',
          data: {
            id: 1,
            title: 'Complete project proposal',
            description: 'Finish writing the project proposal for the upcoming meeting.',
            completed: false,
          },
        },
      },
      createTodo: {
        POSITIVE_CASE_INPUT: {
          title: 'New Todo',
          description: 'A new todo item',
          completed: false,
        },
        POSITIVE_CASE_OUTPUT: {
          status: 'success',
          data: {
            id: 1,
            title: 'New Todo',
            description: 'A new todo item',
            completed: false,
          },
        },
      },
      updateTodo: {
        POSITIVE_CASE_INPUT: {
          id: 1,
          updateData: {
            title: 'Updated Todo',
            description: 'Updated description',
            completed: true,
          },
        },
        POSITIVE_CASE_OUTPUT: {
          status: 'success',
          data: {
            id: 1,
            title: 'Updated Todo',
            description: 'Updated description',
            completed: true,
          },
        },
      },
      deleteTodo: {
        POSITIVE_CASE_INPUT: 1,
        POSITIVE_CASE_OUTPUT: {
          status: "Successfully deleted",
        },
      },
    },
  };
  
  module.exports = mockResources;
  