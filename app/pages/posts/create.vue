<script setup lang="ts">
    console.log('1.Create page working...');
    definePageMeta({
        layout: 'admin',
        myCustomMeta: 'hello meta',
    });

    // Create reactive form
    const url = ref('');
    const title = ref('');
    const content = ref('');
    
    // Set variables
    const appConfig = useAppConfig();

    // Create post variables
    const { getAuthToken,createPost } = usePosts();
    // const { posts, pending, error } = await getAllPosts();
    // console.log('___testPosts:', posts);


    // console.log('___GET_AUTH_TOKEN 111: ', appConfig);
    // const authToken = appConfig.authToken;
    // console.log('___GET_AUTH_TOKEN 222: ', authToken);
</script>
<template>
    <div>
        <h1 style="text-align: center;">Posts Create</h1>
<!--         
        <div style="text-align: center;">
            <input type="text" placeholder="Post Login" v-model="login" />
            <input type="text" placeholder="Post Password" v-model="password" />
            <button @click="getAuthToken({ login, password })">Get Auth Token</button>
        </div>
         -->
        <div style="text-align: center;">
            <input type="text" placeholder="Post Url" v-model="url" minlength="5" required 
            />
            <input type="text" placeholder="Post title" v-model="title" minlength="5" 
      required />
            <input type="text" placeholder="Post content" v-model="content" minlength="25" 
      required />
            <button @click="createPost({ url, title, content })">Create Post</button>
        </div>
    </div>
</template>