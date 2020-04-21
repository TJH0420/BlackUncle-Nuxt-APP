<template>
  <div class="m-search">
    <nuxt-link to='/imgrecognition' class="camera"></nuxt-link>
    <div class="m-search-inner">
      <div class="m-search-sub">
      </div>
      <input type="text" class="m-search-mark" placeholder="公众号 / 程序员黑叔">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.m-search{
  margin: 0.1rem 0;
  position: relative;
  .camera{
    background-size: 0.36rem;
    background-image: url(//ueimg.3conline.com/pcauto/wap/index/w/search/1.0.0/search_0.5294117647058824_z.png);
    background-position: 0 0;
    width: 0.36rem;
    height: 0.36rem;
    position: absolute;
    top: 0.18rem;
    right: 0.4rem;
    z-index: 9;
    background-repeat: no-repeat;
  }
  .m-search-inner{
    height: 0.68rem;
    border-radius: 0.1rem;
    background-color: rgba(60,130,240,.1);
    border: solid 1px #89B3F5;
    line-height: 0.68rem;
    position: relative;
    .m-search-sub{
      background-size: 0.28rem 0.29rem;
      background-position: 0 0;
      width: 0.28rem;
      height: 0.3rem;
      position: absolute;
      left: 0.3rem;
      top: 0.2rem;
      background-repeat: no-repeat;
      background-image: url(//ueimg.3conline.com/pcauto/wap/index/w/search/1.0.0/search_0.5185185185185185_z.png);
    }
    .m-search-mark{
      position: relative;
      overflow: hidden;
      width: 75%;
      height: 90%;
      // color: #aaa;
      vertical-align: inherit;
      background: transparent;
      margin: 0 0.8rem;
      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
			color: #aaa;
      }
      &::-moz-placeholder { /* Firefox 19+ */  
        color: #aaa;
      }
      &:-ms-input-placeholder { /* IE 10+ */ 
      color: #aaa;
      }
      &:-moz-placeholder { /* Firefox 18- */ 
      color: #aaa;
      }
    }

  }
}
</style>
