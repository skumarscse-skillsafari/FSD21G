import express from 'express';
const app = express();
import { firstName, lastName } from './testModule.js';

app.get('/', (req, res) => {
    res.send(`${firstName}, ${lastName}`);
});

app.listen(5000, () => {
    console.log('Server is running in: http://localhost:5000');
});