<template>
  <div class="post-list">
    <h1 class="add-post-link">
     <button class="button"> <router-link to="/add">Добавить Пост</router-link></button>
    </h1>
    <div>
      <h2 class="post-list-title">Посты</h2>
      <ul>
        <li v-for="post in posts" :key="post.id" class="post-item">
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-date">Date: {{ post.date }}</p>
          <router-link :to="'/post/' + post.id" class="more-info-link">More info</router-link>
          <button @click="editPost(post)" class="edit-button">Edit post</button>
          <button @click="deletePost(post.id)" class="delete-button">Delete post</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    editPost(post) {
      this.$router.push({ name: "EditPost", params: { id: post.id } });
    },
    deletePost(postId) {
      this.$store.commit("deletePost", postId);
    },
  },
};
</script>

<style>
.post-list {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.add-post-link a {
  font-size: 34px;
  text-align: center;
  text-decoration: none;
  color: white;
}

.button {
  background-color: #eb8907;
  width: 400px;
  height: 100px;
  border: none;
  color: white;
}

.post-list-title {
  color: #1e3a8a;
  font-size: 28px;
  margin-bottom: 20px;
}

.post-item {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.post-title {
  color: #1e3a8a;
  font-size: 24px;
  margin-bottom: 8px;
}

.post-date {
  color: #555;
  margin-bottom: 8px;
}

.more-info-link {
  color: #007BFF;
  text-decoration: none;
  margin-right: 10px;
  font-size: 16px;
}

.edit-button,
.delete-button {
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin: 20px;
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
</style>
