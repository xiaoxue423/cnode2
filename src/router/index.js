import Vue from 'vue'
import Router from 'vue-router'
import PostList from "../components/PostList";
import SlideBar from "../components/SlideBar"
import Article from "../components/Article";
import UserInfo from "../components/UserInfo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList
      }
    },

    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        slideBar: SlideBar
      }
    },
    {
      name:'user_info',
      path:'/userinfo/:name',
      components:{
        main:UserInfo
      }
    }
  ]
})
