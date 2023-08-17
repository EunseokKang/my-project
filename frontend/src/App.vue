<template>
  <div id="app">
    <div>
      <router-link to="/">목록</router-link>
      <router-link to="/create" class="write-button">
        <template v-slot:default>
          <button>글쓰기</button>
        </template>
      </router-link>


    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
