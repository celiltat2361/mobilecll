import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'celil',
    email: 'celil@example.com',
    password: bcrypt.hashSync('celil', 10),
  },
]

export default users
