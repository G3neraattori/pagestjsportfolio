import {resolve} from 'path';
import {defineConfig} from "vite";

export default defineConfig({
    base: '/pagestjsportfolio/',
    build: {
        rollupOptions: {
            input: {
                main: resolve('index.html')
            }
        }
    }
})