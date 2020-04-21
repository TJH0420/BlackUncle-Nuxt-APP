<template>
  <div class="m-article">
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
          <div class="article-list" v-for="(item,i) in articleList0" :key="i">
            <nuxt-link to="/imgrecognition" class="article-jump">
              <div class="article-list-item">
                <img :src="item.pic" class="article-img" />
                <div class="article-info">
                  <p class="article-title">{{item.title}}</p>
                  <p class="article-desc">{{item.comment_num}}条评论 / {{item.type}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="article-list" v-for="(item,i) in articleList0" :key="i">
            <nuxt-link to="/imgrecognition" class="article-jump">
              <div class="article-list-item">
                <img :src="item.pic" class="article-img" />
                <div class="article-info">
                  <p class="article-title">{{item.title}}</p>
                  <p class="article-desc">{{item.comment_num}}条评论 / {{item.type}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="article-list" v-for="(item,i) in articleList0" :key="i">
            <nuxt-link to="/imgrecognition" class="article-jump">
              <div class="article-list-item">
                <img :src="item.pic" class="article-img" />
                <div class="article-info">
                  <p class="article-title">{{item.title}}</p>
                  <p class="article-desc">{{item.comment_num}}条评论 / {{item.type}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="article-list" v-for="(item,i) in articleList0" :key="i">
            <nuxt-link to="/imgrecognition" class="article-jump">
              <div class="article-list-item">
                <img :src="item.pic" class="article-img" />
                <div class="article-info">
                  <p class="article-title">{{item.title}}</p>
                  <p class="article-desc">{{item.comment_num}}条评论 / {{item.type}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="article-list" v-for="(item,i) in articleList0" :key="i">
            <nuxt-link to="/imgrecognition" class="article-jump">
              <div class="article-list-item">
                <img :src="item.pic" class="article-img" />
                <div class="article-info">
                  <p class="article-title">{{item.title}}</p>
                  <p class="article-desc">{{item.comment_num}}条评论 / {{item.type}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide>
         <div class="article-list" v-for="(item,i) in articleList0" :key="i">
            <nuxt-link to="/imgrecognition" class="article-jump">
              <div class="article-list-item">
                <img :src="item.pic" class="article-img" />
                <div class="article-info">
                  <p class="article-title">{{item.title}}</p>
                  <p class="article-desc">{{item.comment_num}}条评论 / {{item.type}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      cityId: state => state.geo.position.id,
      articleList0: state => state.geo.article
    })
  },
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
  mounted() {
    this.getArticleHandler();
  },
  methods: {
    getArticleHandler() {
      this.$axios
        .post("/geo/article", {
          id: this.cityId,
          type: 0
        })
        .then(({ status, data }) => {
          if (status === 200 && data && data.code === 1) {
            this.$store.commit('geo/setArticle', data.data)
          } else {
          }
        });
    },
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
.m-article {
  margin: 0.1rem 0;
  height: auto;
  .swiper {
    width: 100%;
    padding: 0.9rem 0 0 0;
    .swiper-slide {
      .article-list {
        overflow: hidden;
        .article-list-item {
          display: flex;
          padding: 0.3rem 0;
          border-bottom: 1px solid #f0f0f0;
          .article-img {
            width: 2.25rem;
            height: 1.5rem;
            padding: 0.1rem 0.1rem 0.1rem 0;
          }
          .article-info {
            flex: 1;
            padding: 0.1rem;
            min-width: 0;
            position: relative;
            color: #000;
            .article-title {
              line-height: 0.54rem;
              font-size: 0.32rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .article-desc {
              line-height: 0.4rem;
              color: #999;
              position: absolute;
              bottom: 0;
              font-size: 0.24rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
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
.m-article /deep/ .swiper-pagination-bullet {
  width: auto;
  font-size: 0.32rem;
  opacity: 1;
}
.m-article /deep/ .swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.m-article /deep/ .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(1);
  position: relative;
}
.m-article
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
.m-article
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.m-article
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-prev {
  transform: scale(1);
}
.m-article
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-prev-prev {
  transform: scale(1);
}
.m-article
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-next {
  transform: scale(1);
}
.m-article
  /deep/
  .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet-active-next-next {
  transform: scale(1);
}
.m-article /deep/ .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  flex: 1;
  border-radius: 0;
  background-color: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
  left: 0 !important;
}
.m-article /deep/ .swiper-pagination-bullet:nth-child(1):after {
  content: "推荐";
}
.m-article /deep/ .swiper-pagination-bullet:nth-child(2):after {
  content: "原创";
}
.m-article /deep/ .swiper-pagination-bullet:nth-child(3):after {
  content: "太平洋号";
}
.m-article /deep/ .swiper-pagination-bullet:nth-child(4):after {
  content: "视频";
}
.m-article /deep/ .swiper-pagination-bullet:nth-child(5):after {
  content: "论坛";
}
.m-article /deep/ .swiper-pagination-bullet:nth-child(6):after {
  content: "车市";
}
</style>