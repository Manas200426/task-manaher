const validateTask = (req, res, next) => {
    const { name, completed } = req.body;
    if (typeof name !== 'string' || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid task data' });
    }
    next();
};

module.exports = validateTask;
