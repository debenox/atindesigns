const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
