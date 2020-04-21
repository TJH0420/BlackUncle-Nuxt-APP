<template>
  <div class="city">
    <div class="content">
      <div class="content-currentcity">当前城市：{{cityName}}</div>
      <div class="content-alphabet">
        <ul class="content-alphabet-ul">
          <li v-for="(item,i) in citiesAll" :key="i" @click="keyChooseHandler(item)">{{item}}</li>
        </ul>
      </div>
      <div class="content-city">
        <div class="content-city-choose">{{keyChoose}}</div>
        <ul class="content-city-ul">
          <li
            v-for="(item,i) in citiesOption"
            :key="i"
            @click="citiesChooseHandler(item)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cityJson from "../assets/city.json";
import { mapState} from "vuex";
export default {
  computed: {
    ...mapState({
      cityName: state => state.geo.position.name
    })
  },
  data() {
    return {
      citiesAll: [],
      citiesOption: [],
      keyChoose: "热门"
    };
  },
  mounted() {
    this.keyAllHandler();
    this.keyChooseHandler(this.keyChoose);
  },
  methods: {
    citiesChooseHandler(item) {
      this.$store.commit('geo/setPosition', item)
      this.$router.push({path:'/'})
    },
    keyChooseHandler(key) {
      for (let k in cityJson.data.cities) {
        if (k === key) {
          this.keyChoose = key;
          this.citiesOption = [];
          cityJson.data.cities[key].forEach(e => {
            this.citiesOption.push(e);
          });
        }
      }
    },
    keyAllHandler() {
      for (let k in cityJson.data.cities) {
        this.citiesAll.push(k);
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.city {
  margin: 0.3rem auto;
  width: 5.76rem;
  text-align: center;
  .content-currentcity {
    padding: 0.4rem;
  }
  .content-alphabet {
    overflow: hidden;
    .content-alphabet-ul {
      li {
        background: #f5f6f8;
        float: left;
        margin: 0.04rem;
        width: 0.84rem;
        height: 0.7rem;
        line-height: 0.7rem;
      }
    }
  }
  .content-city {
    overflow: hidden;
    .content-city-choose {
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: left;
    }
    .content-city-ul {
      li {
        background: #f5f6f8;
        float: left;
        margin: 0.04rem;
        width: 0.84rem;
        height: 0.7rem;
        line-height: 0.7rem;
      }
    }
  }
}
</style>