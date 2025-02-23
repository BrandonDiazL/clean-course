// Hay que agregar la dependencia de axios ```yarn add axios```
import { HttpClient } from './02-open-close-c';


export class TodoService { 

    constructor(private http: HttpClient){}

    async getTodoItems() {
        const { data, status } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return { data, status };
    }
}


export class PostService {

    constructor(private http: HttpClient){}

    async getPosts() {
        const { data, status } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return { data, status };
    }
}


export class PhotosService {

    constructor(private http: HttpClient){}

    async getPhotos() {
        const { data, status } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return { data, status };
    }

}