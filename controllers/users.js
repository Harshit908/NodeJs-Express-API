import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();

  const userWithId = { ...user, id: userId };

  users.push(userWithId);
  res.send(
    `User with name ${user.firstName} ${user.lastName} has been added successfully`
  );
};

export const getUser = (req, res) => {
  const toFindId = req.params.id;

  users.map((eachUser) => {
    eachUser.id === toFindId && res.send(eachUser);
  });
};

export const deleteUser = (req, res) => {
  const toFindId = req.params.id;

  users = users.filter((eachUser) => {
    return toFindId === eachUser.id ? false : true;
  });

  res.send(`User with id: ${toFindId} has been removed`);
};

export const updateUser = (req, res) => {
  const toFindId = req.params.id;
  const { firstName, lastName, Age } = req.body;

  const userToUpdate = users.find((eachUser) => eachUser.id === toFindId);

  if (firstName) {
    userToUpdate.firstName = firstName;
  }
  if (lastName) {
    userToUpdate.lastName = lastName;
  }
  if (Age) {
    userToUpdate.Age = Age;
  }
  res.send(`User with the id: ${toFindId} has been updated`);
};
