<template>
  <div>
    <h1>这是一个ts部分的组件</h1>
    <h2>{{ title }}</h2>
    <p>{{ name }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'home-ts',
  computed: {
    name() {
      return '我是字符串';
    },
  },
  data() {
    return {
      title: 'home-ts',
    };
  },
};
</script>
