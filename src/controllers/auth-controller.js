import {
  validateEmail,
  hashPassword,
} from "../utils/user-utils.js";
import {
  getUTCTime,
} from "../utils/time/time-utils.js";
import { generateTokens } from "../utils/token-utils.js";

import * as messages from "../config/constants.js";
import * as models from "../services/user-queries.js";

import bcrypt from "bcrypt";

// Creating a user
export const CreateUserAPIView = async (req, res) => {
  const data = req.body;

  if (!data?.name || !data?.email || !data?.password)
    return res.status(400).json(messages.missingData);

  if (!validateEmail(data.email))
    return res.status(400).json(messages.invalidEmail);

  try {
    const password = await hashPassword(data.password);

    const createdAt = getUTCTime();
    await models.createUser(data.email, data.name, password, createdAt);

    return res.status(201).json(messages.successCreation);
  } catch (error) {
    if (error.code === "P2000") {
      return res.status(400).json(messages.nameTooLong);
    } else if (error.code === "P2002") {
      return res.status(400).json(messages.emailExist);
    } else {
      return res.status(500).json(messages.serverError);
    }
  }
};

// Login a user
export const LoginUserAPIView = async (req, res) => {
  const data = req.body;

  if (!data?.email || !data?.password)
    return res.status(400).json(messages.missingData);

  try {
    const instance = await models.getUserByEmailForLogin(data.email);

    if (!instance) return res.status(404).json(messages.userNotFound);

    // Checking if the account is active
    if (!instance.isActive)
      return res.status(400).json(messages.inactiveAccount);

    const giveAccess = await bcrypt.compare(data.password, instance.password);
    if (!giveAccess) return res.status(401).json(messages.unauthorized);

    // Setting the access token and refresh token for user
    delete instance.password;
    delete instance.isActive;
    const tokens = generateTokens(instance);

    return res.status(200).json(tokens);
  } catch (error) {
    return res.status(500).json(messages.serverError);
  }
};

