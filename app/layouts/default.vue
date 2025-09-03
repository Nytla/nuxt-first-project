<template>
  <header>Header</header>
  <main>
    <h1 style="text-align:center">Default Layout</h1>
    <NuxtLink to="/">Go to Home</NuxtLink> |
    <NuxtLink to="/posts">Go to Posts</NuxtLink> |
    <NuxtLink to="/posts/1">Go to Post 1</NuxtLink> | 
    <NuxtLink to="/posts/2">Go to Post 2</NuxtLink> | 
    <NuxtLink to="/posts/3">Go to Post 3</NuxtLink> |
    <br />
    <slot></slot>
  </main>
  <footer>Footer</footer>
</template>
