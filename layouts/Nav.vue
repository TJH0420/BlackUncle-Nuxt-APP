<template>
  <div class="footer-nav">
    <nuxt-link to="/" class="nav-type cur">首页</nuxt-link>
    <nuxt-link to="/forum" class="nav-type">论坛</nuxt-link>
    <nuxt-link to="/lookingcar" class="nav-type">找车</nuxt-link>
    <nuxt-link to="/discount" class="nav-type">优惠</nuxt-link>
    <nuxt-link to="/myself" class="nav-type">我的</nuxt-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.footer-nav {
  width: 90%;
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 0.1rem 5%;
  text-align: center;
  z-index: 100;
background-color: #fff;
  .nav-type {
    flex: 1;
    font-size: 0.24rem;
    color: #333;
    &::before {
      content: "";
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto 0.1rem;
      background-image: url(//www1.pcauto.com.cn/zt/20190919/footernav/image/nav-icon1.png);
      background-position: -0.8rem 0;
      background-size: 2.06rem 0.41rem;
    }
  }
  .nav-type:nth-child(2) {
    &::before {
      background-position: -0.4rem 0;
    }
  }
  .nav-type:nth-child(3) {
    &::before {
      width: 0.44rem;
      background-position: -1.62rem 0;
    }
  }
  .nav-type:nth-child(4) {
    &::before {
      width: 0.42rem;
      background-position: -1.2rem 0;
    }
  }
  .nav-type:nth-child(5) {
    &::before {
      background-position: 0 0;
    }
  }
  .cur{
    color: #3c82f0;
    &::before {
      background-image: url(//www1.pcauto.com.cn/zt/20190919/footernav/image/nav-btn2.png);
    }
  }
  .cur:nth-child(1) {
    &::before {
      background-position: -0.8rem 0;
    }
  }
  .cur:nth-child(2) {
    &::before {
      background-position: -0.4rem 0;
    }
  }
  .cur:nth-child(3) {
    &::before {
      width: 0.44rem;
      background-position: -1.62rem 0;
    }
  }
  .cur:nth-child(4) {
    &::before {
      width: 0.42rem;
      background-position: -1.2rem 0;
    }
  }
  .cur:nth-child(5) {
    &::before {
      background-position: 0 0;
    }
  }
}
</style>
