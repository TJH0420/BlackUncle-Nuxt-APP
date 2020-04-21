<template>
  <div class="register">
    <div class="register-title">注册账号</div>
    <div class="register-inner">
      <div class="register-ipt-wrap">
        <div class="register-ipt-item">
          <i class="icon icon-name"></i>
          <input
            class="register-ipt register-ipt-tel"
            type="text"
            name="username"
            v-model="form.username"
            placeholder="手机号/邮箱/用户名"
          />
        </div>
      </div>
      <div class="register-ipt-wrap">
        <div class="register-ipt-item">
          <i class="icon icon-captcha"></i>
          <input
            class="register-ipt register-ipt-captcha"
            type="text"
            name="mobileVCode"
            v-model="form.code"
            placeholder="请输入验证码"
          />
          <a
            href="javascript:"
            v-if="visiableCode"
            class="register-ipt register-btn-captcha"
            @click="sendMsg"
          >免费获取验证码</a>
          <a href="javascript:" v-else class="register-ipt register-btn-captcha">{{statusMsg}}</a>
        </div>
      </div>
      <div class="register-ipt-wrap">
        <div class="register-ipt-item">
          <i class="icon icon-pwd"></i>
          <input
            class="register-ipt"
            type="password"
            name="password"
            v-model="form.password"
            placeholder="请输入密码"
          />
        </div>
        <div class="register-ipt-item">
          <i class="icon icon-pwd"></i>
          <input
            class="register-ipt"
            type="password"
            name="password"
            v-model="form.passwordA"
            placeholder="请再次输入密码"
          />
        </div>
      </div>
    </div>
    <div class="submit-btn-wrap">
      <p class="secret">
        <input type="checkbox" name="JscrectBox" v-model="form.bool" />我已阅读并同意
        <nuxt-link to="/imgrecognition">用户使用协议</nuxt-link>和
        <nuxt-link to="/imgrecognition">隐私政策</nuxt-link>
      </p>
      <!-- 登陆按钮 s-->
      <div class="register-submit-btn passport-btn">
        <input class="btn-register" type="submit" value="注册" @click="register" />
      </div>
      <!-- 登陆按钮 e-->
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      statusMsg: "",
      visiableCode: true,
      form: {
        username: "757903179@qq.com",
        password: "",
        passwordA: "",
        code: "",
        bool: false
      }
    };
  },
  methods: {
    sendMsg: function() {
      if (!this.isEmail(this.form.username)) {
        return;
      }
      const self = this;
      self.$axios
        .post("/users/verify", {
          username: encodeURIComponent(self.form.username),
          email: self.form.username
        })
        .then(({ status, data }) => {
          if (status === 200 && data && data.code === 0) {
            self.visiableCode = false;
            let count = 60;
            self.statusMsg = `已发送,剩余${count--}秒`;
            self.timerid = setInterval(function() {
              self.statusMsg = `已发送,剩余${count--}秒`;
              if (count === 0) {
                clearInterval(self.timerid);
                self.visiableCode = true;
              }
            }, 1000);
          } else {
            self.statusMsg = data.msg;
          }
        });
    },
    isEmail(email) {
      if (
        !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
          email
        )
      ) {
        this.$dialog.alert({
          message: "请输入正确的邮箱"
        });
        return false;
      }
      return true;
    },
    register: function() {
      if (!this.isFill()) {
        return;
      }
      let self = this;
      self.$axios
        .post("/users/signup", {
          username: window.encodeURIComponent(self.form.username),
          password: CryptoJS.MD5(self.form.password).toString(),
          email: self.form.username,
          code: self.form.code
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = "/login";
            } else {
              self.$dialog.alert({
                message: data.msg
              });
            }
          } else {
            self.$dialog.alert({
              message: `服务器出错，错误码:${status}`
            });
          }
          setTimeout(function() {
            self.error = "";
          }, 1500);
        });
    },
    isFill: function() {
      if (!this.form.bool) {
        this.$dialog.alert({
          message: "请勾选协议"
        });
        return false;
      }
      for (let key in this.form) {
        if (this.form[key] === "") {
          this.$dialog.alert({
            message: "不能为空"
          });
          return false;
        }
      }
      if (this.form.password !== this.form.passwordA) {
        this.$dialog.alert({
          message: "密码不一致"
        });
        return false;
      }
      return true;
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.register {
  width: 100%;
  .register-title {
    text-align: center;
    color: #f3be8e;
    font-size: 0.5rem;
    margin: 0.8rem auto 0.5rem;
    font-weight: 700;
  }
  .register-inner {
    padding: 0 0.3rem;
    background: #fff;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    .register-ipt-wrap {
      overflow: hidden;
      border-bottom: 1px solid #ebebeb;
      .icon-name {
        float: left;
        margin: 0.38rem 0.26rem 0 0;
        background-repeat: no-repeat;
        background-size: cover;
        width: 0.31rem;
        height: 0.35rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAjCAYAAABsFtHvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTRDRkREODc2MkVEMTFFNzg4NkVBRjE0QUNGRTAxQUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTRDRkREODg2MkVEMTFFNzg4NkVBRjE0QUNGRTAxQUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNENGREQ4NTYyRUQxMUU3ODg2RUFGMTRBQ0ZFMDFBQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNENGREQ4NjYyRUQxMUU3ODg2RUFGMTRBQ0ZFMDFBQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv78T/AAAALvSURBVHjavJdNSFRRFMfvPLUgCqR0KBd9o+ImIiPMwk1tCmvThyYtCmLCpHZO0zKhHDdRFDamBS00i4qSVhVugjLEqFUhmdWusQ8jjMKa/gf+z4Zx4t05rzcHfhzem3vu/9777r3nTCiVSplsFolEsr1eBhrANrAalIAJ8BrcA9fAW2mYSCSMlxUaO5sHToFmUJTxWxnZDNpAJ4iBKa9OHQvhUvAIHAMFnN1OEAYhennu5+9HpT1WrtSv+BwwANaCUbAeNIK7IMk2ST438PdRth/AAOb6EY+DDeAN2ARGPNqPsN0Y49q14ktBC/gN9oAPlvtD2u1lXAtmv1wjfpAbUr7lsMnNhhkn8Qc04lvorxqduXFbNeIr02ahsef0FRrxRfQTSvGP9As14m5wiVLcHfwnjfgYfbVSfA39K434Q/r9SnE37r5GvAdM8+bKdfbVjJP4Kxrxd+A82/TzDrexMO9/ibuA7DauvV6jYIjH7onFCqwDj8EqxkX93O0/QT14Blaww16+K2PiWcJnef+UA5X29Zj1D7/5PMlkcZr5vJFks2l+qhiEPfO5bTExxXx+hhtpO5c2WyUzbrsrC3PYwZVc3hqwmNVNEb08bwS/mP9f2nQY8qjhQqxSjjM/29oQc/kdLH9Ks+HKwSC4TeFJntkmrkIxB1fM5yb+Psn2EjeISVTkNHME7Ia7DOaDL6ADnLUpCvkZZH+0cmDfpDbACtzwFIfwIbiLXJVedqTJbLIZz/FkSFVzGAO49E9xCO9Ku51irOFU5tbt6DPKYyoD2If312d9czQq51JL+XvCj3DGIOLsT/rtps5fcbyQjdMFFoA+BLSb/2jsr4/9d1FvZuZynOp4mx0xwVgz+6+j3ox4K30bRvk5CGX0K6fmZLqegyWo5K0l57PbBGs91KkRXYdXptgtjO57kMrs/yYfdzjMWGIPTH7M1akV8aqMOjtoe0Ff5aSVR+/zJO7qhB3+mY/je3zNhzJ15OLp/CPAAHSL102dduK1AAAAAElFTkSuQmCC);
      }
      .register-ipt {
        float: left;
        width: 5.9rem;
        height: 0.5rem;
        line-height: 0.5rem !important;
        margin: 0.31rem 0;
        font-size: 0.32rem;
      }
      .register-ipt-item {
        overflow: hidden;
        height: 1.12rem;
        .icon.icon-pwd {
          float: left;
          margin: 0.38rem 0.26rem 0 0;
          background-repeat: no-repeat;
          width: 0.28rem;
          height: 0.32rem;
          margin: 0.44rem 0.26rem 0 0;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjJBRDFDMkY2MkVEMTFFNzhDQzhCNkYyMThGNjZGMzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjJBRDFDMzA2MkVEMTFFNzhDQzhCNkYyMThGNjZGMzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMkFEMUMyRDYyRUQxMUU3OENDOEI2RjIxOEY2NkYzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMkFEMUMyRTYyRUQxMUU3OENDOEI2RjIxOEY2NkYzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoZRDk8AAAM1SURBVHjatJd7iExxFMdnJpk8QitaEkKrPJJHtkiIfyghuyisrHZGkqxX67Gy8YfRWpGNsbShlE02ZIk8svOH1aKULUNs4i+PZW3rtYzPqXO32917Z+489lffOfc3v3PO9/x+93fO73e9sVjMk0wLBoOHELPAU1AfDodrkrH3uiWEaCpCyOZbhoSwBOK3GSOE7DSiSLuvwDowBRwE/fT/MNgD8eeUCCHJUpIVYDLoAJVgN07bVWeoznoV8KnpRVALnoB36P7tQojhXHUs7+Yb6A/GmfQegY0YP3MIbiLiAFhkIjaa+HsNIthv8QYCASG7Z+PnB7gDqsANlGMuln44YimYByaAEZYAjgnhPh7KNMJL+k5aQRSSP540G0EMQIwGjbLMPfjJ1bEGCF54Mtzw+RVSYwePkunmaOelp/tau8reQjhIO5+6i41Z/tRHv8+UR63dRciS9tXHNnmHXo3iX5pOCxClYDW+GizDfpW/ZYZtlihSIStEVIMxYKCNyjCV74Xwg+VPO4e9EpBVab5tZ3Z1NmojVTaLUlQ7OQ4OF8gqIEMuyI44xGVUrSZRNNZ7uoNyi9bRnRCUO5Bti0MmbabKiFSa2Tw8AI8xynWYpdTIy6AnEMdNFrKKOEsuOnKCSMXJkk5Ex6Zp9bfLo+uIPNllQgDOuCHTNkfJHqLb4tPjo0YdrI+TvAZpTFOpxAWZtLUqZRU7K/lZlQFm6U9AKkHt5znkIl2kqCzT7rlOQoxvI+5qamxIUKaqQZnLFN0E+oA6bN54LGfVKZWlRDY4A+VMavQO7Z4w/veZIpddeEUrxfEMlNAK3Sy1+L7ZhVDbZvBFrhtEWJTG7FZKTQXfwVbzmM/yfqTMFRvLgOGMFMgmmTbhLnw2OxIq6Xk1kCS/qg7cko2V+48ctLIr8VWZzDVRcjMffAQLMW50MbNbIBtcQ3+xnZ4vzvZfruVMdtt9HC6JQ5avFStb76R5Kd+8cSZLvEYrzGGwl2A6TIl9FBSq+gXGCjJx1T9pKgjPpSKB8XrVHwJ+yWkCWcJ0SuZjRo6YkOmoMZocuMWQRVP+mMF5PJty/SSQO2y9Xi2s79/R+L8AAwB5szyyqPhl/QAAAABJRU5ErkJggg==);
          background-size: 100% 100%;
        }
        .register-ipt {
          float: left;
          width: 5.9rem;
          height: 0.5rem;
          line-height: 0.5rem !important;
          margin: 0.31rem 0;
          font-size: 0.32rem;
        }
        .icon-captcha {
          width: 0.25rem;
          height: 0.3rem;
          margin: 0.44rem 0.26rem 0 0.03rem;
          float: left;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjIxRTIxQzg2NTM4MTFFN0I4NzU5ODYwM0UzNDAzNjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjIxRTIxQzk2NTM4MTFFN0I4NzU5ODYwM0UzNDAzNjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMjFFMjFDNjY1MzgxMUU3Qjg3NTk4NjAzRTM0MDM2MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMjFFMjFDNzY1MzgxMUU3Qjg3NTk4NjAzRTM0MDM2MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjm1RY0AAAD7SURBVHjaYvz//z9Denq6KgMDQwcQuwAxHwPl4BMQ7wHiipkzZ95mTEtLUwdyTgCxAAP1wQcgtmABEm1QC5YDcQEQvyJGN9CFOOWAISMGpCYAcSTIfCZoEDGQYgERDngFNQ8E3JiQ4uAVNcMJahEI8DAx0AGMWjJqyaglo5ZQGbCQqxFYnA9en/wfNnHCSAPz/1MU8YTqeeTEQWpwtQLxZyhNszgpAdXZQJxHS0t6gPgrEE8i1ZJPULYYEeqroT6pJiKzwsz7wgRtTjJAG2Ni1Ih0pMYdCOwCNVM1gIzjNGymWjIBXXQD1F4F4nXQlEMN8BlqngXIfIAAAwAzAz8HOGGzjgAAAABJRU5ErkJggg==);
        }
        .register-btn-captcha {
          float: right;
          width: 2.1rem;
          text-align: center;
          font-size: 0.26rem;
          color: #007adf;
        }
        .register-ipt-captcha {
          width: 4rem;
          border-right: 1px solid #ebebeb;
          border-radius: 0;
          float: left;
          height: 0.5rem;
          line-height: 0.5rem;
          margin: 0.31rem 0;
          font-size: 0.32rem;
        }
      }
    }
  }
  .submit-btn-wrap {
    margin: 0 0.3rem;
    p {
      margin: 0.5rem 0 0.3rem;
    }
    .secret {
      font-size: 14px;
      color: #aaa;
      input {
        float: left;
        margin-right: 0.1rem;
      }
      a {
        color: #007adf;
      }
    }
    .passport-btn {
      margin-top: 0.2rem;
      .btn-register {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size: 0.32rem;
        text-align: center;
        color: #fff;
        background: #007adf;
        border-radius: 3px;
      }
    }
  }
}
</style>