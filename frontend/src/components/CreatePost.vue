<template>
    <div>
      <h2>새 글 작성</h2>
      <form @submit.prevent="createPost">
        <div>
          <label for="author">작성자</label>
          <input type="text" id="author" v-model="author" placeholder="이름을 입력하세요" />
        </div>
        <div>
          <label for="title">제목</label>
          <input type="text" id="title" v-model="title" placeholder="제목을 입력하세요" />
        </div>
        <div>
          <label for="content">내용</label>
          <textarea id="content" v-model="content" placeholder="내용을 입력하세요"></textarea>
        </div>
        <button type="submit">작성하기</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        author: "",
        title: "",
        content: "",
      };
    },
    methods: {
      async createPost() {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            author: this.author,
            title: this.title,
            content: this.content,
          }),
        };
  
        try {
          const response = await fetch(
            "http://localhost:3000/posts/create",
            requestOptions
          );
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          this.author = "";
          this.title = "";
          this.content = "";
          alert("성공적으로 게시물이 작성되었습니다.");
          this.$router.push("/"); // 목록페이지로 이동
        } catch (error) {
          console.error("Error creating post:", error);
          alert("게시물 작성 중에 오류가 발생했습니다. 다시 시도하세요.");
        }
      },
    },
  };
  </script>
  