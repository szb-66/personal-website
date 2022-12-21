import { createRouter, createWebHashHistory } from "vue-router"
import { defineAsyncComponent } from 'vue'

const routes = [
  { path: "/", redirect: "/home", },
  { path: '/home', component: () => import('../components/home.vue'), name: 'home' },
  { path: '/about', component: () => import('../components/about.vue'), name: 'about' },
  { path: '/content/:fileName/:imgNumber', component: () => import('../components/content.vue'), name: 'content' }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, 
})

// 切换页面自动返回顶部
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default router