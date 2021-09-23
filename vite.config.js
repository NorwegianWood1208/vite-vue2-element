import { createVuePlugin } from 'vite-plugin-vue2'
import path from "path"
export default {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
                // 给导入的路径最后加上 ;
                additionalData: '@import "./src/styles/index.scss";'
            }
        }
    },
    server: {
        hmr: {
            overlay: false
        },
        proxy: {
            '/dev-api': {
                target: 'http://192.168.1.33:9528',
                changeOrigin: true,
            },
        }
    },
    plugins: [createVuePlugin()]
}
