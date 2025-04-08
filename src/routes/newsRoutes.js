import express from "express";
import { getLatestNews } from "../controllers/newsControllers.js";

const newsRouter = express.Router();

newsRouter.get("/latest", getLatestNews);

export default newsRouter;