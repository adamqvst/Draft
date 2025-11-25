import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({

    plugins: [ glsl() ],

    build: {
        rollupOptions: {
            input: {
                app: './frontend/index.html'
            },
        },
    },
    server: {
        open: '/index.html',

        watch: {
            usePolling: true, // Enable polling fomr dtecting file changes
        }
    }
})