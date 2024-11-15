import bcrypt from "bcrypt";

// Hashing the password
export const hashPassword = async (password) => {
  const slatRounds = 10;
  const salt = await bcrypt.genSalt(slatRounds);

  // Hashing the password
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

// Validating the form of the email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(email);
};

// Generating a random code
export const generateRandomCode = () => {
  let code = "";

  for (let i = 0; i < 5; i++) code += Math.floor(Math.random() * 10);

  return code;
};

