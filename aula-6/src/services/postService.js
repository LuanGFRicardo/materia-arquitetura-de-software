import { PostRepository } from "../repositories/postRepository.js";
import { PostDto } from "../dtos/postDto.js";
import { author } from "../models/Author.js";

export class PostService {
    postRepository = new PostRepository();
    getAllPosts = async () => {
        return await this.postRepository.findAll();
    }
    createPost = async (postData) => {
        const foundAuthor = await author.findById(postData.author);
        if (!foundAuthor) {
            throw new Error("Author não encontrado!");
        }
        const completePost = {
            ...PostDto.fromRequest(postData),
            author: { ...foundAuthor._doc },
        }
        return await this.postRepository.create(completePost);
    }
    getPostById = async (id) => {
        const post = await this.postRepository.findById(id);
        if (!post) {
            throw new Error("Post não encontrado!");
        }
        return post;
    }
    //restante das implementações...
}