<template>
    <div>
      <h2>전체 글 목록</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.author }} | {{ formatDate(post.created_at) }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      try {
        const response = await fetch('http://localhost:3000/posts/list');
        this.posts = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString("ko-KR");
      },
    },
  };
  </script>
  