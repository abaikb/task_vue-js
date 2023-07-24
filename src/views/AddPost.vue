<template>
  <div>
    <form @submit.prevent="addPost" class="form">
      <h2 class="title">Добавить Пост</h2>
      <div class="form-group">
        <label for="title">Заголовок:</label>
        <input type="text" id="title" v-model="newPost.title" required />
      </div>
      <div class="form-group">
        <label for="description">Описание:</label>
        <textarea id="description" v-model="newPost.description" required></textarea>
      </div>
      <button type="submit" class="submit-button">Сохранить</button>
    </form>
    <router-link to="/" class="back-link">Назад</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPost: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    addPost() {
      const postId = this.$store.state.posts.length + 1;
      const date = new Date().toLocaleDateString('en-US');
      const creator = 'Абай'; 
      const newPost = { ...this.newPost, date, creator, id: postId };
      this.$store.commit('addPost', newPost);
      this.$router.push('/');
    },
  },
};
</script>

<style>

.title {
  color: #0c60e2;
  font-size: 24px;
  margin-bottom: 16px;
  font-style: italic;
}

.form {
  max-width: 1000px;
  height: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-weight: bold;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #0c60e2;
  box-shadow: 0 0 4px rgba(12, 96, 226, 0.3);
}

.submit-button {
  background-color: #0c60e2;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.submit-button:hover {
  background-color: #0046b4;
}

.back-link {
  display: block;
  margin-top: 16px;
  color: #0c60e2;
  text-decoration: none;
  font-size: 30px;
}

.back-link:hover {
  text-decoration: underline;
  
}
</style>
