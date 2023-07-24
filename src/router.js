import { createRouter, createWebHistory } from 'vue-router';
import PostList from './views/PostList.vue';
import PostDetails from './views/PostDetails.vue';
import AddPost from './views/AddPost.vue';
import EditPost from './views/EditPost.vue';

const routes = [
  { path: '/', component: PostList },
  { path: '/add', component: AddPost },
  { path: '/post/:id', component: PostDetails, name: 'PostDetails' },
  { path: '/edit/:id', component: EditPost, name: 'EditPost' }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
