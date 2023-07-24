import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: [],
  },

  mutations: {
    addPost(state, post) {
      state.posts.push(post);
    },
    editPost(state, { postId, updatedPost }) {
      const postIndex = state.posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        state.posts.splice(postIndex, 1, updatedPost);
      }
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
});

export default store;
