<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>我怎么能吧这个项目改造成ts + vue + jsx 呢？？？</div>
    <br />
    <Home>没有加载到home？</Home>
    <Decorator>没有加载到Decorator ？？</Decorator>
    <Jsx>没有加载到JSX ？？？</Jsx>
  </div>
</template>

<script>
import Home from './Home.vue';
import Decorator from './Decorator.vue';
import Jsx from './Jsx.tsx';

export default {
  name: 'HelloWorld',
  components: { Home, Decorator, Jsx },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
