// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  // create a global var for the whole project
  runtimeConfig: {
    // Private keys are only available on the server side
    private: {
      
    },
    public: {
      // authToken: process.env.APP_AUTH_TOKEN || '---default-token---',
      authToken: '[-default-token-]',
    }
  }
})
