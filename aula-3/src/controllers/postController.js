import post from "../models/Post.js";

class PostController {
    static async getAllPosts(req, res) {
        try {
            const listPosts = await post.find({});
            res.status(200).json(listPosts);
        } catch(error) {
            res.status(500).send();
        }
    }
}