import { prisma } from "../config/database-config.js";

// Creating the methods of the user
export const createUser = (email, name, password, createdAt) => {
  return prisma.user.create({
    data: {
      email: email,
      name: name,
      password: password,
      createdAt: createdAt,
    },
  });
};

export const updatePassword = (email, password) => {
  return prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: password,
    },
  });
};

export const createSuperuser = (email, name, password, createdAt) => {
  return prisma.user.create({
    data: {
      email: email,
      name: name,
      password: password,
      isSuperuser: true,
      isActive: true,
      createdAt: createdAt,
    },
  });
};

export const getUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      name: true,
      password: true,
    },
  });
};

export const getUserByEmailForLogin = (email) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true,
      gender: true,
      password: true,
      isActive: true,
      isSuperuser: true,
    },
  });
};

export const getUserDataForTokenByEmail = (email) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      isSuperuser: true,
    },
  });
};

export const getUserById = (id) => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      name: true,
      gender: true,
      isSuperuser: true,
      createdAt: true,
    },
  });
};

export const createCodeEmail = (userId, code, time) => {
  return prisma.codeEmail.upsert({
    where: {
      userId: userId,
    },
    create: {
      userId: userId,
      code: code,
      expiredAt: time,
    },
    update: {
      code: code,
      expiredAt: time,
    },
  });
};

export const retrieveUserIdWithCodeEmail = (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      codeEmail: true,
    },
  });
};

export const deleteCodeEmail = (userId, code) => {
  return prisma.codeEmail.delete({
    where: {
      code: code,
      userId: userId,
    },
  });
};

export const activateUser = (userId) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isActive: true,
    },
  });
};

// Getting the field of the account's activation by user's id
export const getUsernameWithEmailAndActivationStatusById = (userId) => {
  return prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      email: true,
      name: true,
      isActive: true,
    },
  });
};

// Returning a list of users
export const listInActiveUsers = (skip, take) => {
  return prisma.user.findMany({
    where: {
      isActive: false,
      isSuperuser: false,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
    skip: skip,
    take: take,
  });
};

// Deleting a user by id
export const deleteUserById = async (userId) => {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

// Counting users
export const countUsersInActiveUsers = () => {
  return prisma.user.count({
    where: {
      isActive: false,
      isSuperuser: false,
    },
  });
};

// update the name of the user
export const updateUserName = (userId, name) => {
  return prisma.user.update({
    where: {
      id: userId,
      isActive: true,
    },
    data: {
      name: name,
    },
  });
};

