<script setup lang="ts">
//import post from '#app/middleware/post.js';
import { useRoute } from 'vue-router';
    console.log('1.layout working...');
    definePageMeta({
        layout: 'admin',
        // middleware: 'post',
        myCustomMeta: 'hello meta',
    });

    // Set variables    
    const route = useRoute();
    const { getAllPosts } = usePosts();

    // Fetch post data from composable
    const { posts, pending, error } = await getAllPosts();
</script>
<template>
    <div>
        <div v-if="pending">Загрузка...</div>
        <h1 v-else-if="error" style="text-align: center;">This is posts error - {{ error }}</h1>
        <div v-else-if="posts" style="text-align: center;">
            <hr />
            <h2 style="text-align:center">List of posts:</h2>
            <hr />
            <ul>
                <li v-for="post in posts" :key="post.id" style="list-style: none;">
                    <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>