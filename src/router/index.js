import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

const Discover = () => import("../views/discover/Discover.vue");
const Recommend = () => import("../views/discover/Recommend.vue");
const TopList = () => import("../views/discover/TopList.vue");
const PlayList = () => import("../views/discover/PlayList.vue");
const DJ = () => import("../views/discover/DJ.vue");
const Artist = () => import("../views/discover/Artist.vue");
const Album = () => import("../views/discover/Album.vue");

const My = () => import("../views/my/My.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/discover",
    name: "Discover",
    component: Discover,
    redirect: '/recommend',
    children: [
      {
        path: "recommend",
        name: "Recommend",
        component: Recommend,
      },
      {
        path: "toplist",
        name: "TopList",
        component: TopList,
      },
      {
        path: "playlist",
        name: "PlayList",
        component: PlayList,
      },
      {
        path: "dj",
        name: "DJ",
        component: DJ,
      },
      {
        path: "artist",
        name: "Artist",
        component: Artist,
      },
      {
        path: "album",
        name: "Album",
        component: Album,
      },
      {
        path: '*',
        redirect: 'recommend'
      }
    ],
  },
  {
    path: "/my",
    name: "My",
    component: My,
  },
  {
    path: '*',
    redirect: '/discover/recommend'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("changeCurrentPageName", to.name);
  next()
})



export default router;
