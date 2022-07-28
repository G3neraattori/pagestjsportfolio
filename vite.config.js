import {resolve} from 'path';
import {defineConfig} from "vite";

export default defineConfig({
    base: '/pagestjsprotfolio/',
    build: {
        rollupOptions: {
            input: {
                main: resolve('index.html')
            }
        }
    }
})