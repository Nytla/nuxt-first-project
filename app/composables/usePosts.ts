// Create a TypeScript interface for Auth data
export interface Auth{
    login: string;
    password: string;
    token?: string;
};

// Create a TypeScript interface for Post data
export interface Posts{
    id: number;
    url: string;
    title: string;
    content: string;
    createdAt: string;
    UserId: number;
    User: {
        id: number;
        login: string;
        email: string;
        createdAt: string;
        updatedAt: string;
    }
};

// Create a TypeScript interface for Post create data
export interface PostCreate{
    url: string;
    title: string;
    content: string;
};

// Composable for fetching posts data [ALL POSTS]
export const usePosts = () => {

    // Access the Nuxt app instance
    // const nuxtApp = useNuxtApp();

    // const $fetch = nuxtApp.$fetch;

    // Access runtime config
    const config = useRuntimeConfig();

    // Composable for fetching auth token
    const getAuthToken = async(formData: Auth) => {

        console.log('___FORM_DATA___: ', formData);

        // Logic to retrieve the auth token (e.g., from cookies, local storage, etc
        // const response = await $fetch('http://localhost:3001/auth/login/', {
        const { data, pending, error } = await useFetch<Auth>('http://localhost:3001/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log('___errors___: ', error.value?.statusCode, error.value?.statusMessage);

        // Check for errors
        if (error.value) {

            // Check status code 422 - Unprocessable Entity
            if (error.value?.statusCode === 422) {
                alert('Validation Error: Login or Password not wrong.');
                // console.error('Validation Error: ', error.value);
                // Handle validation error (e.g., show a notification, highlight form fields, etc.)
            } else if (error.value?.statusCode === 401) {
                // console.error('Authentication Error: ', error.value);
                // Handle authentication error (e.g., show a notification, redirect to login, etc.)
            } else if (error.value?.statusCode === 500) {
                // console.error('Server Error: ', error.value);
                // Handle server error (e.g., show a notification, log the error, etc.)
            } else {
                console.error('Error fetching auth token:', error.value);
                // Handle other types of errors (e.g., show a notification, log the error, etc.)
            }

            // console.error('Error fetching auth token:', error.value);
            // Handle the error appropriately (e.g., show a notification, redirect, etc.)
            return { data: null, pending, error };
        } else {
            // Check if token exists in response
            if (data.value?.token) {
                console.log('___TOKEN:))) ', data.value?.token);

                // Example: Set token in a cookie (you can use a library like js-cookie for better handling)
                //document.cookie = `authToken=${data.value.token}; path=/;`;
            
                // Set token to in local storage
                localStorage.setItem('authToken', data.value.token);

                // And redirect to a protected route or update the UI accordingly
                navigateTo('/posts/create');
            }
        }

        // return response;
        return { data, pending, error };
    }
    // Composable for fetching all posts data
    const getAllPosts = async () => {

        console.log('___TOKEN: ', config.public.authToken);

        const { data: posts, pending, error } = await useAsyncData<Posts[]>(
            'all-posts',
        //   () => $fetch('https://jsonplaceholder.typicode.com/posts')
            () => $fetch<Posts[]>('http://localhost:3001/posts/')
        );
        return { posts, pending, error };
    };

    // Composable for fetching post data [POST BY ID]
    const getPostById = async(id:Number) => {

        console.log('___POST_ID: ', id);
        // console.log('___POSTs: ', Posts);

        const { data: posts, pending, error } = await useAsyncData(
            `post-${id}`,
            // () => $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            () => $fetch<Posts>(`http://localhost:3001/posts/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        );
        return { posts, pending, error };
    };

    // Create new post
    const createPost = async (formData: PostCreate) => {

console.log('___NEW_POST: ', formData);

        // Logic to create a new post (e.g., send a POST request to the server)
        try {
            //Send auth token from local storage
            const token = localStorage.getItem('authToken');

            // Check if token exists in local storage
            if (!token) {
                throw new Error('No auth token found. Please log in.');
            }

            // Send POST request to create a new post
            const response = await $fetch<PostCreate>('http://localhost:3001/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
            
            // On success, you might want to redirect the user or update the UI
            alert('Post created successfully!');
            navigateTo('/posts');
            
            //return response;
        } catch (error) {
            alert('Error creating post. Please try again. Error: ' + error);
            console.error('Error creating post:', error);
            throw error;
        }
    }

    return {
        getAuthToken,
        getAllPosts,
        getPostById,
        createPost,
    };
}