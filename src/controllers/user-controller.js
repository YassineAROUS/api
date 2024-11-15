import * as messages from "../config/constants.js";
import * as queries from "../services/user-queries.js";

// Listing the users by pagination
export const listUserAPIView = async (req, res) => {
  try {
    // Setting the default number of the page
    var page = 1;

    if (req.query?.page) {
      page = req.query.page;
    }

    if (page < 1) return res.status(400).json(messages.invalidDataFormat);

    // Setting the number of rows that will be skipped
    const skip = (page - 1) * messages.PAGINATE_BY;

    // Retrieving the number of records in the db
    const numberRecords = await queries.countUsersInActiveUsers();
    const users = await queries.listInActiveUsers(skip, messages.PAGINATE_BY);

    // data of the response
    const totalPagesFloat = numberRecords / messages.PAGINATE_BY;
    const totalPages =
      totalPagesFloat - Math.trunc(totalPagesFloat) > 0
        ? Math.trunc(totalPagesFloat) + 1
        : totalPagesFloat;
    const data = {
      data: users,
      pagination: {
        records: numberRecords,
        currentPage: page,
        totalPages: totalPages,
      },
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(messages.serverError);
  }
};

// Retrieving the data of a authenticated user
export const RetrieveUserAPIView = async (req, res) => {
  try {
    // Getting the id of the user
    const userId = req.params.id;

    // Retrieving the data of the user
    const userInstance = await queries.getUserById(userId);
    if (!userInstance) return res.status(404).json(messages.userNotFound);

    return res.status(200).json(userInstance);
  } catch (error) {
    return res.status(500).json(messages.serverError);
  }
};

export const RetrieveAuthenticatedUserAPIView = async (req, res) => {
  try {
    // Getting the id of the user
    const userId = req.user.id;

    // Retrieving the data of the user
    const userInstance = await queries.getUserById(userId);
    if (!userInstance) return res.status(404).json(messages.userNotFound);

    return res.status(200).json(userInstance);
  } catch (error) {
    return res.status(500).json(messages.serverError);
  }
};

// Activating the account of the user
export const ActivateAccountAPIView = async (req, res) => {
  try {
    const userId = req.body.userId;

    // Checking if the data is provided in the request
    if (!userId) return res.status(400).json(messages.missingData);

    // Activating the account
    const userAccount = await queries.activateUser(userId);

    // Sending an email to the user
    const emailSbuject = "Account Activation Confirmation From Associamed";
    const emailContent = `Dear ${userAccount.name} \nYour account has been activated successfully! 🎉\nYou can now log in and start exploring.\nBest regards,\nAssociaMed Sfax`;

    return res.status(200).json(messages.successUpdate);
  } catch (error) {
    return error.code === "P2025"
      ? res.status(404).json(messages.userNotFound)
      : res.status(500).json(messages.serverError);
  }
};

// Rejecting user
export const DeleteUserAPIView = async (req, res) => {
  try {
    const userId = req.params.id;

    // Deleting the user
    await queries.deleteUserById(userId);

    return res.status(204).json();
  } catch (error) {
    return error.code === "P2025"
      ? res.status(404).json(messages.userNotFound)
      : res.status(500).json(messages.serverError);
  }
};

// Update the name of the product
export const UpdateUserNameAPIView = async (req, res) => {
  try {
    const userId = req.user.id;
    const userName = req.body.name;

    // Checking the provided data
    if (!userName) return res.status(400).json(messages.missingData);

    // update the user's name
    await queries.updateUserName(userId, userName);

    return res.status(202).json(messages.successUpdate);
  } catch (error) {
    return error.code === "P2025"
      ? res.status(404).json(messages.userNotFound)
      : res.status(500).json(messages.serverError);
  }
};

// Rejecting user
export const DeleteAuthenticatedUserAPIView = async (req, res) => {
  try {
    const userId = req.user.id;

    // Deleting the user
    await queries.deleteUserById(userId);

    return res.status(204).json();
  } catch (error) {
    return error.code === "P2025"
      ? res.status(404).json(messages.userNotFound)
      : res.status(500).json(messages.serverError);
  }
};

