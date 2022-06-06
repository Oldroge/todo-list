const express = require('express');

const app = express();

const userRouter = require('./Router/usersRoute');
const tasksRouter = require('./Router/tasksRoute');

const PORT = 3000;

app.use('/user', userRouter);
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Connect in port ${PORT}`);
});
