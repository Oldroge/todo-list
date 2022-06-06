const DELETE_USER_DATAS = 'DELETE FROM todo_list.user_datas';
const DELETE_TASKS_DATAS = 'DELETE FROM todo_list.tasks_datas';

const SET_FOREIGN_KEY = 'SET FOREIGN_KEY_CHECKS=0;';

const POST_USER_DATAS = `
INSERT INTO user_datas (full_name, email, password, token) VALUES
('Marina Conrad Polli da Silva', 'marinacpolli@hotmail.com', 'alaska104', 'LGYjwAVYeN1doVRezidaIQvcblj629801ff5a5d4'),
('Rogério Martins Rocha Junior', 'rogeriomrjr@gmail.com', 'alaska104', 'oMmGVwMcc1zge9JJOyvSA4kAi6p629802354dc5c');`;

const POST_TASKS_DATAS = `INSERT INTO tasks_datas (task, deadline, relevance, USERID)
VALUES ('ESTUDAR', '2022-06-03', '3', 2),
('TRABALHAR', '2022-06-03', '2', 1);`;

module.exports = {
  DELETE_USER_DATAS,
  DELETE_TASKS_DATAS,
  POST_USER_DATAS,
  POST_TASKS_DATAS,
  SET_FOREIGN_KEY,
};
