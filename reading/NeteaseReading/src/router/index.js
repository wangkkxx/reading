import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import Home from '../components/tab/home.vue'
import Classify from '../components/tab/classify.vue'
import Book from '../components/tab/book.vue'
import My from '../components/tab/my.vue'
import Search from '../components/sub/search.vue'
import Article from '../components/sub/article.vue'
import Comment from '../components/sub/comment.vue'
import Subclass from '../components/sub/subclass.vue'
import List from '../components/sub/list.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/home/article',component:Article},
    {path:'/home/article/comment',component:Comment},
    {path:'/',redirect:'/home'},
    {path:'/classify',component:Classify},
    {path:'/classify/search',component:Search},
    {path:'/classify/subclass',component:Subclass},
    {path:'/book',component:Book},
    {path:'/book/list',component:List},
    {path:'/my',component:My}
  ]
})
