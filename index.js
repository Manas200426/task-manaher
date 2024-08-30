const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middleware/logger');
const validateTask = require('./middleware/validateTask');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/Task_Manager';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use('/api', taskRoutes);
app.use(logger);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
