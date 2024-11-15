import express from "express";
import swaggerUI from "swagger-ui-express";

import authRoute from "./routes/auth-route.js";
import tokenRoute from "./routes/token-route.js";
import userRoute from "./routes/user-route.js";
import eventRoute from "./routes/event-route.js";
import callRoute from "./routes/call-route.js";
import newsRoute from "./routes/news-route.js";

import swagger from "./config/swagger/swagger.js";
import cors from "cors";

// Creating an instance of express
const app = express();

// Serving Swagger documentation
app.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(swagger));

// Setting the middleware of json, cors and static files
app.use(cors());
app.use(express.json());
app.use("/app/images/", express.static("./images"));

// Setting the routes
app.use("/auths", authRoute);
app.use("/tokens", tokenRoute);
app.use("/users", userRoute);
app.use("/events", eventRoute);
app.use("/news", newsRoute);
app.use("/calls", callRoute);

// Starting the server
app.listen(8000, () => {
  console.log("The server is litening on the port 8000...");
});

