import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private post: PostProvider) {}

    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        this.posts = await this.post.getPosts();

        return this.posts;
    }
}