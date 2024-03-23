const { TodoModel } = require('../models');
const logger = require('../utils/logger');

const seedTodos = async () => {
  try {
    await TodoModel.bulkCreate([
      {
        title: 'Complete project proposal',
        description: 'Finish writing the project proposal for the upcoming meeting.',
        completed: false,
      },
      {
        title: 'Attend team meeting',
        description: 'Join the team meeting to discuss project updates and roadblocks.',
        completed: true,
      },
      {
        title: 'Prepare presentation slides',
        description: 'Create slides for the client presentation scheduled next week.',
        completed: false,
      },
      {
        title: 'Review code changes',
        description: 'Go through the recent code changes and provide feedback.',
        completed: true,
      },
      {
        title: 'Submit expense reports',
        description: 'Submit the expense reports for the business trip last month.',
        completed: false,
      },
      {
        title: 'Call with a client',
        description: 'Schedule and conduct a call with a key client to discuss project progress.',
        completed: false,
      },
      {
        title: 'Organize team-building event',
        description: 'Plan and coordinate a team-building event for the department.',
        completed: true,
      },
      {
        title: 'Research new technologies',
        description: 'Explore and research new technologies for potential project enhancements.',
        completed: false,
      },
      {
        title: 'Write blog post',
        description: 'Draft a blog post on a relevant industry topic for the company blog.',
        completed: false,
      },
      {
        title: 'Attend workshop',
        description: 'Participate in a workshop to enhance skills and knowledge.',
        completed: true,
      },
      {
        title: 'Update documentation',
        description: 'Review and update project documentation for better clarity.',
        completed: false,
      },
      {
        title: 'Create marketing materials',
        description: 'Design marketing materials for an upcoming product launch.',
        completed: false,
      },
      {
        title: 'Practice presentation',
        description: 'Rehearse the presentation for the internal training session.',
        completed: true,
      },
      {
        title: 'Networking event',
        description: 'Attend a networking event to connect with industry professionals.',
        completed: false,
      },
      {
        title: 'Send client invoices',
        description: 'Send out client invoices for completed project milestones.',
        completed: false,
      },
    ]);

    logger.info('Seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding data:', error);
  }
};

module.exports = seedTodos;
