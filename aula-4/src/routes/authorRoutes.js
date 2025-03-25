import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.getAllPosts);
routes.post("/authors", AuthorController.createPost);
routes.get("/authors/:id", AuthorController.getPostById);
routes.delete("/authors/:id", AuthorController.deletePostById);

export default routes;