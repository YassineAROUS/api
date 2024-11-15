import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

// Generating an access and refresh tokens
export const generateTokens = (user) => {
  const access = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "15min" });
  const refresh = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "90d" });

  return {
    access: access,
    refresh: refresh,
  };
};

// Verifying the validity of the token and returning the instance of the user
export const verifyToken = (token) => {
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);

    // Deleting the unnecessary fields
    delete user.exp;
    delete user.iat;

    return user;
  } catch (TokenExpiredError) {
    throw new Error("Token is expired!");
  }
};

// Generating an acess token
export const generateAccessToken = (user) => {
  const access = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "15min" });

  return access;
};

