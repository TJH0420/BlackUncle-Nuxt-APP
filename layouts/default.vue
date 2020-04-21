<template>
  <div>
    <Header></Header>
    <nuxt />
    <Nav></Nav>
  </div>
</template>
<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
export default {
  components: {
    Header,
    Nav,
  } 
}
</script>
<style>
</style>
