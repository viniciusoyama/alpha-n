let usersList = [{
  id: 1,
  name: 'Paola'
},{
  id: 2,
  name: 'Castor'
},{
  id: 3,
  name: 'Matz'
}];

module.exports = {
  getAllUsers() {
    return usersList;
  },

  findUser(id) {
    return usersList.find((u) => u.id == id);
  },

  createUser(name) {
    let newUser = {
      id: usersList.length + 1,
      name: name
    }

    usersList.push(newUser);

    return newUser;
  },

  updateUser(id, newName) {
    let user = this.findUser(id);
    user.name = newName;
    return true;
  },

  deleteUser(id) {
    usersList = usersList.filter((u) => u.id != id);
    return true;
  }
}
