// import axios from 'axios'
import { useRoute } from 'vue-router'

export default async function (to, from, next) {

// const route = useRoute();
// const postId = route.params.id;

console.log('___Post middleware file - postID==='+to.params.id);

console.log('___Post middleware file - myCustomValue...'+to.meta.myCustomMeta);

console.log('___Post middleware triggered for route:', to.fullPath);

    const postId = to.params.id
    try {

console.log('___Fetching post data for URL:',`http://localhost:3001/posts/${postId}`);

        // const { data } = await useFetch(`http://localhost:3001/posts/${postId}`);

        const { data } = await useFetch(`http://localhost:3001/posts/${postId}`);

console.log('___Fetched post data:', data);
        
        // Attach post data to route meta for use in the page
        to.meta.post = data;
        // next()
    } catch (error) {
        // Redirect or handle error as needed
        // next({ name: 'error', params: { message: 'Post not found' } })
        console.error('Error fetching post data:', error);
    }
}