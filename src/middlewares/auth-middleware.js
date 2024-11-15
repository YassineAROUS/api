import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import * as messages from "../config/constants.js";

dotenv.config();

export const isSuperuser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);

    // checking the role of the user
    if (user && user.isSuperuser) {
      req.user = user;
      return next();
    }

    return res.status(403).json(messages.forbidden);
  } catch (InvalidToken) {
    return res.status(401).json(messages.unauthorized);
  }
};

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);

    // Checking if the user is authenticated
    if (user) {
      req.user = user;
      return next();
    }

    return res.status(401).json(messages.unauthorized);
  } catch (InvalidToken) {
    return res.status(401).json(messages.unauthorized);
  }
};

export const isOwner = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);

    // Checking if the user is authenticated and the same user that needs to get data
    if (user && user.id === req.params.id) {
      req.user = user;
      return next();
    }

    return res.status(403).json(messages.forbidden);
  } catch (InvalidToken) {
    return res.status(401).json(messages.unauthorized);
  }
};

