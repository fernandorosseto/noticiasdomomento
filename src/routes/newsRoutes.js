import express from "express";
import { getLatestNews } from "../controllers/newsControllers.js";

const newsRouter = express.Router();

newsRouter.get("/", getLatestNews);

export default newsRouter;