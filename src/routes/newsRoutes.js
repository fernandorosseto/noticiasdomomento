import express from "express";
import { getNews } from "../controllers/newsControllers.js";

const newsRouter = express.Router();

newsRouter.get("/", getNews);

export default newsRouter;