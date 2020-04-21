<template>
    <div class="m-icons">
      <client-only>
        <swiper
          ref="carousel"
          class="swiper"
          :options="swiperOptions"
          @ready="onSwiperRedied"
          @clickSlide="onSwiperClickSlide"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
        >
          <swiper-slide>按品牌</swiper-slide>
          <swiper-slide>按价格</swiper-slide>
          <swiper-slide>按级别</swiper-slide>
          <swiper-slide>热门车</swiper-slide>
          <swiper-slide>新能源</swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>
</template>

<script>

export default {
  components: {
  },
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
          clickable :true,
        },
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
  .m-icons {
    margin: 0.1rem 0;
    height: auto;
    .swiper {
      width: 100%;
      padding: 0.9rem 0 0 0;
      .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-pagination {
        top: 0;
        width: 100% !important;
        padding: 0;
        height: 0.88rem;
        display: flex;
        > .swiper-pagination-bullet {
          background-color: red;
        }
      }
    }
  }
.m-icons /deep/ .swiper-wrapper {
  height: 2.7rem;
}
.m-icons /deep/ .swiper-pagination-bullet {
  width: auto;
  font-size: 0.32rem;
  opacity: 1; 
}
.m-icons /deep/ .swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.m-icons /deep/ .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(1);
  position: relative;
}
.m-icons
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active {
  transform: scale(1);
  font-size: 0.4rem;
  font-weight: 700;
  color: #007aff;
  border-bottom: 2px solid #007aff;
  outline: none;
}
.m-icons
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.m-icons
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-prev {
  transform: scale(1);
}
.m-icons
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-prev-prev {
  transform: scale(1);
}
.m-icons
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-next {
  transform: scale(1);
}
.m-icons
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-next-next {
  transform: scale(1);
}
.m-icons /deep/ .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  flex: 1;
  border-radius: 0;
  background-color: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
  left: 0 !important;
}
.m-icons /deep/ .swiper-pagination-bullet:nth-child(1):after {
  content: "按品牌";
}
.m-icons /deep/ .swiper-pagination-bullet:nth-child(2):after {
  content: "按价格";
}
.m-icons /deep/ .swiper-pagination-bullet:nth-child(3):after {
  content: "按级别";
}
.m-icons /deep/ .swiper-pagination-bullet:nth-child(4):after {
  content: "热门车";
}
.m-icons /deep/ .swiper-pagination-bullet:nth-child(5):after {
  content: "新能源";
}
</style>