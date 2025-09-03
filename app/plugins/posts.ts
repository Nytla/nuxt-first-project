export interface Posts{
    id: number;
    url: string;
    title: string;
    content: string;
    createdAt: string;
    UserId: number;
    User: object
};
export default defineNuxtPlugin({
  name: 'posts',
  parallel: true,
  async setup (nuxtApp) {

    // the next plugin will be executed immediately
    console.log('___This is posts plugin');
/*
    const appFetch = $fetch.create({
      baseURL: 'http://localhost:3001/posts/', //todo: of course it can be it env
      onRequest({ options }) {
        options.headers.append('Accept', 'application/json');
      },
      async onResponseError({ response }) {
        
      }
    });
    
    return {
      provide: {
        appFetch
      }
    }
*/
    // const config = useRuntimeConfig();
    // const getPosts = await $fetch(`${config.public.apiBase}/posts`);
    // const getAllPosts = await $fetch(`http://localhost:3001/posts/`);
    // const getAllPosts = await $fetch<Posts>(`http://localhost:3001/posts/`);
    // console.log('___Fetched posts data in plugin:', getAllPosts);
    // nuxtApp.provide('getPosts',getAllPosts);
  }
})