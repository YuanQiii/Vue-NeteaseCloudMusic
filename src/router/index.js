/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2022-02-13 23:38:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\router\index.js
 */
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
const Home = () => import("../views/my/Home.vue");
const Music = () => import("../views/my/Music.vue");
const Message = () => import("../views/my/Message.vue");


const PlaylistDetail = () => import("../views/page/PlaylistDetail.vue");
const AlbumDetail = () => import("../views/page/AlbumDetail.vue");
const SongDetail = () => import("../views/page/SongDetail.vue");


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
        path: "toplist/:id",
        name: "TopList",
        component: TopList,
      },
      {
        path: "playlist/:category",
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
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'music',
        name: 'Music',
        component: Music
      },
      {
        path: 'message',
        name: 'Message',
        component: Message
      },
    ]
  },
  {
    path: '/playlist/:id',
    name: 'playlistDetail',
    component: PlaylistDetail
  },
  {
    path: '/album/:id',
    name: 'albumDetail',
    component: AlbumDetail
  },
  {
    path: '/song/:id',
    name: 'songDetail',
    component: SongDetail
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

// router.beforeEach((to, from, next) => {
//   store.commit("changeCurrentPageName", to.name);
//   next()
// })



export default router;
