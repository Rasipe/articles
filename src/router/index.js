import VueRouter from "vue-router"
import ArticlePage from "@/articles/ArticlesListPage"
import ArticleDetails from "@/articles/ArticlesDetails"

const routes = [
  {
    path: '/',
    name: 'home',
    component: ArticlePage
  },
  {
    path: '/:id',
    name: 'details',
    component: ArticleDetails
  }
]

export default new VueRouter({
  routes
})