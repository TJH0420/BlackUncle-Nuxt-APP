<template>
  <div class="container"  @click="$router.history.go(-1)">
    <div>待开发</div>
    <div>返回</div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang='scss' scoped>
.container{
  text-align: center;
  margin-top: 5rem;
    color: red;
    font-size: 1rem;
}
</style>