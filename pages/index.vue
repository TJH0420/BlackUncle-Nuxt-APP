<template>
  <div class="container">
    <Search></Search>
    <Icons></Icons>
    <Wrapper></Wrapper>
    <Tool></Tool>
    <Article></Article>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import Icons from "../components/Icons.vue";
import Wrapper from "../components/Wrapper.vue";
import Tool from "../components/Tool.vue";
import Article from "../components/Article.vue";

export default {
  components: {
    Search,
    Icons,
    Wrapper,
    Tool,
    Article
  },
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
.container {
  padding: 0 5% 1.2rem;
}
</style>