/* eslint-disable prefer-const */
let mockUserDataBase = [
  {
    id: 1,
    full_name: 'Marina Conrad Polli da Silva',
    email: 'marinacpolli@hotmail.com',
    password: 'alaska104',
    token: 'LGYjwAVYeN1doVRezidaIQvcblj629801ff5a5d4',
  },
  {
    id: 2,
    full_name: 'Rogério Martins Rocha Junior',
    email: 'rogeriomrjr@gmail.com',
    password: 'alaska104',
    token: 'oMmGVwMcc1zge9JJOyvSA4kAi6p629802354dc5c',
  },
];

const mockNewUser = {
  id: 3,
  full_name: 'Alaska da Silva Polli',
  email: 'alaska@gmail.com',
  password: 'alaska104',
  token: 'oMmRZmWcc1zge9JJOyvSA4kAi6p629802354dc5c',
};

const mockNewUserWithWrongInfos = {
  id: 3,
  full_name: 'Alaska da Silva Polli',
  email: 'alaska@gmail.com',
  password: 'alaska104',
  token: 'oMmRZmWcc1zge9JJOyvSA4kAi6p629802354dc5c',
};

module.exports = {
  mockUserDataBase,
  mockNewUser,
  mockNewUserWithWrongInfos,
};
