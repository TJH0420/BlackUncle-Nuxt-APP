<template>
  <div class="m-pctop">
    <nuxt-link to="/" title="程序员黑叔" class="m-pctop-logo"></nuxt-link>
    <nuxt-link to="/city" class="m-pctop-admin"></nuxt-link>
    <nuxt-link to="/city" class="m-pctop-city">{{cityName}}</nuxt-link>
  </div>
</template>
<script>
import { mapState} from "vuex";
export default {
  computed: {
    ...mapState({
      cityName: state => state.geo.position.name
    })
  },
};
</script>
<style lang='scss'>
.m-pctop {
  padding: 0 5%;
  height: 0.88rem;
  background: #fff;
  position: relative;
  z-index: 1;
  .m-pctop-logo{
    float: left;
    width: 3rem;
    height: 0.48rem;
    background: url(../assets/logo.png) no-repeat;
    background-size: 3rem;
    margin: 0.22rem 0 0 0;
  }
  .m-pctop-admin{
    background-size: 0.4rem 0.48rem;
    background-image: url(//ueimg.3conline.com/pcauto/wap/index/w/header/1.0.0/header_0.5_z.png);
    background-position: 0 0;
    float: right;
    width: 0.44rem;
    height: 0.48rem;
    position: relative;
    margin: 0.22rem 0 0 0.2rem;
    cursor: pointer;
    background-repeat: no-repeat;
  }
  .m-pctop-city{
    float: right;
    height: 0.48rem;
    line-height: 0.48rem;
    margin: 0.22rem 0 0 0;
    position: relative;
    cursor: pointer;
  }
}
</style>
