import { createRouter, createWebHashHistory } from "vue-router"
import { defineAsyncComponent } from 'vue'

const routes = [
  { path: "/", redirect: "/home", },
  { path: '/home', component: () => import('../components/home.vue'), name: 'home' ,meta:{title:'施志标'}},
  { path: '/about', component: () => import('../components/about.vue'), name: 'about' ,meta:{title:'关于我'}},
  { path: '/content/:id', component: () => import('../components/content.vue'), name: 'content'}
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

//2.使用router.beforeEach对路由进行遍历，设置title
router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
   //判断是否有标题
  //  console.log(to.meta.title)
   document.title = to.meta.title
  } else {
   document.title = '施志标'
  }
  next()
 })

export default router