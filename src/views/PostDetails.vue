<template>
  <div class="post-details">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-date">Date: {{ post.date }}</p>
    <p class="post-creator">Creator: {{ post.creator }}</p>
    <p class="post-description">{{ post.description }}</p>
    <div class="buttons">
      <button class="edit-button" @click="editPost">Edit post</button>
      <button class="delete-button" @click="deletePost">Delete post</button>
    </div>
    <router-link class="back-link" to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      const postId = parseInt(this.$route.params.id);
      return this.$store.state.posts.find((post) => post.id === postId);
    },
  },
  methods: {
    editPost() {
      this.$router.push({ path: '/edit/' + this.post.id });
    },
    deletePost() {
      this.$store.commit('deletePost', this.post.id);
      this.$router.push('/');
    },
  },
};
</script>

<style>
.post-details {
  max-width: 800px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.post-title {
  color: #007BFF;
  font-size: 38px;
  margin-bottom: 16px;
}

.post-date,
.post-creator {
  color: #555;
  margin-bottom: 18px;
}

.post-description {
  font-size: 26px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.edit-button,
.delete-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.edit-button {
  background-color: #f39c12;
  color: #fff;
}

.edit-button:hover {
  background-color: #eb8907;
}

.delete-button {
  background-color: #d9534f;
  color: #fff;
}

.delete-button:hover {
  background-color: #c9302c;
}

.back-link {
  display: block;
  margin-top: 20px;
  color: #007BFF;
  text-decoration: none;
  font-size: 16px;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
