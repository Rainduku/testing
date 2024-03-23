const { validationResult } = require('express-validator');
const todoRequirements = require('./todo.requirements');

const requirements = {
    ...todoRequirements,
}

const validate = (req, res, next) => {
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
        next();
    } else {
        const errorMessage = errors.array()[0]?.msg || 'Validation error';
        return res.status(400).json({ message: errorMessage });
    }
};

module.exports = {
    requirements,
    validate,
};