import { createRouter, createWebHistory } from "vue-router";
import PostList from "../components/PostList.vue";
import CreatePost from "../components/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "PostList",
    component: PostList,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
