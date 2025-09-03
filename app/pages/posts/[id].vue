<script setup lang="ts">
    // import post from '#app/middleware/post.js';
    import { useRoute } from 'vue-router';

    definePageMeta({
        layout: 'admin',
        // middleware: 'post',
        myCustomMeta: 'hello meta',
    });

    // Set variables    
    const route = useRoute();
    const postId = route.params.id;
    const { getPostById } = usePosts();
    
    // Fetch post data from composable
    const { posts, pending, error } = await getPostById(Number(postId));
    </script>
<template>
    <h1 style="text-align: center;">This is post = {{postId}}</h1>
    <div v-if="pending">Загрузка...</div>
    <h1 v-else-if="error" style="text-align: center;">This is error - {{ error }}</h1>
    <div v-else-if="posts" style="text-align: center;">
        <h3>{{ posts.id }}</h3>
        <p>{{ posts.url }}</p>
        <p>{{ posts.title }}</p>
        <p>{{ posts.content }}</p>
        <p>{{ posts.createdAt }}</p>
        <p>{{ posts.UserId }}</p>
        <p>{{ posts.User.login }}</p>
    </div>
</template>