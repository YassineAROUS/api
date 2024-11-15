import * as models from "../services/call-queries.js";

import * as messages from "../config/constants.js";
import { setUTCTunisiaTime, getUTCTime } from "../utils/time/time-utils.js";

// Creating an call
export const CreateCallAPIView = async (req, res) => {
  try {
    const name = req.body.name;
    const userId = req.user.id;
    const callUrl = req.body.url;

    // Checking if the data is provided in the request
    if (!name) return res.status(400).json(messages.missingData);

    const createdAt = getUTCTime();
    await models.createCall(name, callUrl, userId, createdAt);

    return res.status(201).json(messages.successCreation);
  } catch (error) {
    return error.code === "P2003"
      ? res.status(404).json(messages.userNotFound)
      : res.status(500).json(messages.serverError);
  }
};

// Listing calls
export const ListCallAPIView = async (req, res) => {
  try {
    var timeBefore = req.body.before;
    var timeAfter = req.body.after;
    
    // Checking if the data is provided in the request
    if (!timeAfter || !timeBefore)
      return res.status(400).json(messages.missingData);

    // Converting the time
    timeBefore = setUTCTunisiaTime(timeBefore);
    timeAfter = setUTCTunisiaTime(timeAfter);

    // Listing the calls
    const calls = await models.listCallInPeriod(timeBefore, timeAfter);

    return res.status(200).json(calls);
  } catch (error) {
    return res.status(500).json(messages.serverError);
  }
};

// Deleting a call
export const DeleteCallAPIView = async (req, res) => {
  try {
    const callId = req.params.id;

    // Deleting the call
    await models.deleteCall(callId);

    return res.status(204).json(messages.successDeletion);
  } catch (error) {
    return error.code === "P2025"
      ? res.status(404).json(messages.callNotFound)
      : res.status(500).json(messages.serverError);
  }
};

// Updating a call
export const UpdateCallAPIView = async (req, res) => {
  try {
    console.log(req.body);
    const callId = req.params.id;
    const data = req.body;
    var updatedData = {};

    if (data?.name) updatedData.name = data.name;

    if (data?.url) updatedData.url = data.url;

    // Updating the call
    await models.updateCall(callId, updatedData);

    return res.status(202).json(messages.successUpdate);
  } catch (error) {
    return error.code === "P2025"
      ? res.status(404).json(messages.callNotFound)
      : res.status(500).json(messages.serverError);
  }
};

