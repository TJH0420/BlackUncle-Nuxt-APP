<template>
  <div class="m-tool">
    <div class="m-tool-list">
      <nuxt-link to="/imgrecognition" class="tool-type">销量排行</nuxt-link>
      <nuxt-link to="/imgrecognition" class="tool-type">上市新车</nuxt-link>
      <nuxt-link to="/imgrecognition" class="tool-type">购车计算</nuxt-link>
      <nuxt-link to="/imgrecognition" class="tool-type">车型对比</nuxt-link>
      <nuxt-link to="/imgrecognition" class="tool-type">条件找车</nuxt-link>
    </div>
    <div class="m-entry-list">
      <nuxt-link to="/imgrecognition" class="entry-type">
        <span>新车特惠</span>
        <i>专享特价</i>
      </nuxt-link>
      <nuxt-link to="/imgrecognition" class="entry-type">
        <span>豪华车</span>
        <i>奢华体验</i>
      </nuxt-link>
      <nuxt-link to="/imgrecognition" class="entry-type">
        <span>皆电</span>
        <i>新能源车</i>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang='scss' scoped>
.m-tool {
  .m-tool-list {
    display: flex;
    text-align: center;
    margin-top: 0.4rem;
    .tool-type {
      flex: 1;
      &::before {
        content: "";
        display: block;
        width: 0.68rem;
        height: 0.68rem;
        margin: 0 auto 0.16rem;
        background-size: 0.68rem 3.5rem;
        background-image: url(//ueimg.3conline.com/pcauto/wap/index/w/toolentry/1.0.0/toolentry_0.5151515151515151_z.png);
      }
    }
    a {
      color: #333;
    }
    .tool-type:nth-child(2) {
      &::before {
        background-position: 0 -0.71rem;
      }
    }
    .tool-type:nth-child(3) {
      &::before {
        background-position: 0 -1.4rem;
      }
    }
    .tool-type:nth-child(4) {
      &::before {
        background-position: 0 -2.13rem;
      }
    }
    .tool-type:nth-child(5) {
      &::before {
        background-position: 0 -2.84rem;
      }
    }
  }
  .m-entry-list {
    display: flex;
    margin-top: 0.4rem;
    .entry-type {
      flex: 1;
      height: 1.2rem;
      position: relative;
      overflow: hidden;
      border-radius: 0.1rem;
      &::before {
        content: "";
        display: block;
        position: absolute;
        right: -0.4rem;
        bottom: 0.08rem;
        margin: 0 0.18rem 0 0;
        width: 1.26rem;
        height: 0.52rem;
        background-repeat: no-repeat;
        background-size: 1.26rem 1.24rem;
        background-image: url(//ueimg.3conline.com/pcauto/wap/index/w/toolentry/1.0.0/toolentry_0.5_z.png);
      }
      span {
        display: block;
        color: #333;
        font-size: 0.28rem;
        line-height: 0.28rem;
        font-weight: 700;
        margin: 0.2rem 0 0.14rem 0.2rem;
      }
      i {
        color: #b7a79d;
        display: block;
        font-size: 0.2rem;
        line-height: 0.2rem;
        margin-left: 0.2rem;
      }
    }
    .entry-type:nth-child(2) {
      &::before {
        background-size: 1.2rem 0.615rem;
        background-image: url(//ueimg.3conline.com/pcauto/wap/index/w/toolentry/1.0.0/toolentry_0.5042016806722689_z.png);
      }
    }
    .entry-type:nth-child(3) {
      &::before {
        background-position: -0.04rem -0.55rem;
      }
    }
  }
}
</style>