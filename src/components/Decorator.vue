<template>
  <div>
    装饰器模式下的ts
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class Decorator extends Vue {
  name = 'decorator'
}
export default Decorator;
</script>

<style scoped>

</style>
