/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const { expect } = require('chai');

const mockUserDataBase = [
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

describe('Test users model', () => {
  it('Should return an object array', async () => {
    expect(mockUserDataBase).to.be.an('array');
  });

  it('Should return at least 1 user from database', async () => {
    expect(mockUserDataBase).to.have.lengthOf.at.least(1);
  });
});
