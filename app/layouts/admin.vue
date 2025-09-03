<template>
  <header>
    <p style="text-align:center">Admin Header</p>
    <hr/>
    <h1 style="text-align:center">Admin Menu</h1>
    <hr />
    <div style="text-align:center">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/login">Login</NuxtLink> |
      <NuxtLink to="/posts/create">Create Posts</NuxtLink> |
      <NuxtLink to="/posts">ALL Posts</NuxtLink> |
      <NuxtLink to="/posts/1">Go to Post 1</NuxtLink> | 
      <NuxtLink to="/posts/2">Go to Post 2</NuxtLink> | 
      <NuxtLink to="/posts/3">Go to Post 3</NuxtLink> |
    </div>
    <hr/>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <hr/>
    <p style="text-align:center">Admin Footer</p>
  </footer>
</template>