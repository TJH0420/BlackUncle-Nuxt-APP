<template>
  <div class="myself">
    <nuxt-link v-if="username===''" to="/login" class="myself-unonline">去登录</nuxt-link>
    <div v-else class="myself-online">
      <div class="myself-online-username">{{username}}</div>
      已登录
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  computed: {
    ...mapState({
      username: state => state.user.userInfo.username
    })
  },
  components: {}
};
</script>
<style lang='scss' scoped>
.myself {
  text-align: center;
  font-size: 1rem;
  .myself-online {
    display: block;
    color: #f3be8e;
    margin-top: 0.5rem;
    .myself-online-username{
      font-size: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
  .myself-unonline {
    display: block;
    color: #f3be8e;
    margin-top: 0.5rem;
  }
}
</style>