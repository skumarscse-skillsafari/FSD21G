import express from 'express';
import tasks from './routes/tasks.js';
const app = express();

// Add middleware
app.use(express.json());

// route : http://localhost:5000/api/v1/tasks
app.use('/api/v1/tasks', tasks);

app.get('/', (req, res) => {
    res.send(`Welcome...`);
});

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
});