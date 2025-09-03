<script setup lang="ts">
    definePageMeta({
        layout: 'admin',
        myCustomMeta: 'hello meta',
    });

    // Create reactive form
    const formLogin = reactive({
        login: '',
        password: '',
    });

    // Set variables
    const appConfig = useAppConfig();

    // Create post variables
    const { getAuthToken } = usePosts();
    // const { posts, pending, error } = await getAllPosts();
    
    // Create login function
    async function authLogin(formLogin: { login: string; password: string }) {
        console.log('Login data___:', formLogin);
        if (!formLogin.login || !formLogin.password) {
            alert('Please enter login and password');
            return;
        }
        await getAuthToken(formLogin);
    }
</script>
<template>
    <div>
        <h1 style="text-align: center;">Login Page</h1>
        <div style="text-align: center;">
            <form>
                <input type="text" placeholder="Post Login" v-model="formLogin.login" />
                <input type="text" placeholder="Post Password" v-model="formLogin.password" />
                <button @click.prevent="authLogin(formLogin);">Get Auth Token</button>
            </form>
        </div>
    </div>
</template>