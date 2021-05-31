import posts from './posts';

//Get all posts 
export async getPosts() {
    const response = await posts.get('/posts');

    return response.data;
};

//Get comments associated to a post with the given id
export aync getComments(id) {
    const response = await posts.get(`/posts/${id}/comments`);

    return response.data;
}


