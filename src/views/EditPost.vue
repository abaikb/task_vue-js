<template>
  <div>
    <form @submit.prevent="updatePost" class="edit-post-form">
      <h2 class="edit-post-title">Edit Post</h2>
      <div class="form-group">
        <label for="title" class="form-label">Title:</label>
        <input type="text" id="title" v-model="editedPost.title" class="form-input" required />
      </div>
      <div class="form-group">
        <label for="description" class="form-label">Description:</label>
        <textarea id="description" v-model="editedPost.description" class="form-textarea" required></textarea>
      </div>
      <button type="submit" class="submit-button">Save</button>
    </form>
    <router-link :to="'/post/' + postId" class="back-link">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedPost: {},
    };
  },
  computed: {
    postId() {
      return this.$route.params.id;
    },
    post() {
      const postId = parseInt(this.$route.params.id);
      return this.$store.state.posts.find((post) => post.id === postId);
    },
  },
  methods: {
    updatePost() {
      this.$store.commit('editPost', {
        postId: this.postId,
        updatedPost: this.editedPost,
      });
      this.$router.push({ path: '/post/' + this.postId });
    },
  },
};
</script>

<style>
.edit-post-title {
  color: #1e3a8a;
  font-size: 28px;
  margin-bottom: 20px;
}

.edit-post-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 40px;
  font-size: 26px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #1e3a8a;
  box-shadow: 0 0 4px rgba(30, 58, 138, 0.3);
}

.submit-button {
  background-color: #1e3a8a;
  color: #fff;
  padding: 22px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.submit-button:hover {
  background-color: #153269;
}

.back-link {
  display: block;
  margin-top: 20px;
  color: #1e3a8a;
  text-decoration: none;
  font-size: 36px;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
