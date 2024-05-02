import { createRouter, createWebHistory } from 'vue-router'
//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 导入路由组件
import home from '@/views/index.vue'

// 定义路由，每个路由都需要映射到一个组件
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'layout_home',
        },
        component: home,
    },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//进度条配置
NProgress.configure({
    showSpinner: true //右上角显示转旋图标
})

//路由守卫
router.beforeEach((to) => {
    NProgress.start() // start progress bar
    if(to.meta.title) {
        document.title = to.meta.title
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})

// 导出路由实例，并在 `main.js` 挂载
export default router