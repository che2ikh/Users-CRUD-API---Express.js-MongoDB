const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data_dev/users.json');

const getUsers = async () => {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);

};

const getUserById = async (id) => {
  const users = await getUsers();
  return users.find(u => u.id === id);
};

const createUser = async (user) => {
  const users = await getUsers();
  const newUser = { id: Date.now(), ...user };
  users.push(newUser);
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  return newUser;
};

const updateUser = async (id, updatedData) => {
  const users = await getUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...updatedData };
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  return users[index];
};

const deleteUser = async (id) => {
  const users = await getUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  const deleted = users.splice(index, 1);
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  return deleted[0];
};

module.exports = {
     getUsers,
      getUserById,
       createUser,
        updateUser,
         deleteUser
         };
