const express = require('express');

const app = express();

const userRouter = require('./Router/usersRoute');

const PORT = 3000;

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`Connect in port ${PORT}`);
});
