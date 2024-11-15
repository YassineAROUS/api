import fs from "fs";

import * as models from "../services/news-queries.js";
import * as messages from "../config/constants.js";
import { getUTCTime } from "../utils/time/time-utils.js";

// Create a news
export const CreateNewsAPIView = async (req, res) => {
  try {
    const userId = req.user.id;
    const name = req.body.name;
    const description = req.body.description;

    // checking if the data is provided in the request
    if (!name || !description || !req.file)
      return res.status(400).json(messages.missingData);

    // Retrieving the path of the image
    const imagePath = messages.IMAGES_NEWS + req.file.filename;

    // Creating the news
    const currentTime = getUTCTime();
    await models.createNews(userId, name, description, imagePath, currentTime);

    return res.status(201).json(messages.successCreation);
  } catch (error) {
    // Deleting the image
    if (req.file) fs.unlink(req.file.path, () => {});

    return error.code === "P2003"
      ? res.status(404).json(messages.userNotFound)
      : res.status(500).json(messages.serverError);
  }
};

// Deleting an news
export const DeleteNewsAPIView = async (req, res) => {
  try {
    const newsId = req.params.id;

    // retrieving the news
    const news = await models.retrieveNewById(newsId);
    if (!news) return res.status(404).json(messages.newsNotFound);

    // Deleting the image
    const imagePath = news.image;
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });

    // Deleting the news
    await models.deleteNewsById(newsId);

    return res.status(204).json(messages.successDeletion);
  } catch (error) {
    return error.code === "P2025"
      ? res.status(404).json(messages.newsNotFound)
      : res.status(500).json(messages.serverError);
  }
};

// Listing the news in a period
export const ListNewsAPIView = async (req, res) => {
  try {
    // Retrieving the news from the database
    const news = await models.listLatestFourNews();
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json(messages.serverError);
  }
};

// Updating the news
export const UpdateNewsAPIView = async (req, res) => {
  try {
    // Getting the news id
    const newsId = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    var updatedData = {};

    // Adding the provided data that will be update
    if (name) updatedData.name = name;

    if (description) updatedData.description = description;

    if (req.file) {
      const news = await models.retrieveNewById(newsId);
      if (!news) return res.status(404).json(messages.newsNotFound);

      // Adding the image to the updated data
      updatedData.image = messages.IMAGES_NEWS + req.file.filename;

      // Deleting the image
      const imageToDeletePath = news.image;
      fs.unlink(imageToDeletePath, () => {});
    }

    // Updating the news
    if (updatedData.name || updatedData.description || req.file)
      await models.updateNews(newsId, updatedData);

    return res.status(202).json(messages.successUpdate);
  } catch (error) {
    if (req.file) fs.unlink(req.file.path, () => {});

    return error.code === "P2025"
      ? res.status(404).json(messages.newsNotFound)
      : res.status(500).json(messages.serverError);
  }
};

