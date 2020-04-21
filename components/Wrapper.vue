<template>
  <div class="m-wrapper">
    <client-only>
      <swiper
        ref="carousel"
        class="swiper"
        :options="swiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide>
          <img src="//img0.pcauto.com.cn/pcauto/teach/tiyan/2004/20204/3/15859240364593410.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img
            src="//img0.pcauto.com.cn/pcauto/teach/tuijian/2004/20204/3/15858946654501240.jpg"
            alt
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="//img0.pcauto.com.cn/pcauto/hangjia/focus/2004/20204/3/15859114385809680.jpg"
            alt
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true
        }
        // paginationClickable: true,
      }
    };
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log("Swiper redied!", swiper);
    },
    onSwiperSlideChangeTransitionStart() {
      console.log("SwiperSlideChangeTransitionStart!");
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log("Swiper click slide!", reallyIndex);
    }
  }
};
</script>

<style lang='scss' scoped>
.m-wrapper {
  height: auto;
  .swiper {
    height: 3.5rem;
    width: 100%;
    border-radius: 3%;
    img {
      width: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
}
.m-wrapper
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active {
  background: #fff;
}
</style>