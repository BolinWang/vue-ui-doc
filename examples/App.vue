<template>
  <div id="app">
    <mainHeader />
    <div class="container">
      <sideNav class="nav" />
      <router-view class="view" />
    </div>
    <mainFooter />
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import mainFooter from './components/footer.vue'
import sideNav from './components/side-nav.vue'
import router from './router'
export default {
  name: 'App',
  components: {
    mainHeader,
    sideNav,
    mainFooter
  },
  data () {
    return {
      isMobileShow: false
    }
  },
  watch: {
    $route (to, from) {

    }
  },
  mounted () {
    if ('onhashchange' in window) {
      window.onhashchange = function (ev) {
        let name = window.location.hash.substring(2)
        router.push({ name })
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/index';
#app {
  background-color: #fff;
}
.container {
  margin: 48px auto;
  width: 90%;
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(100% - 215px);
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: '';
  clear: both;
  display: block;
}
.mobile-toggle-wrap {
  position: fixed;
  right: 70px;
  top: 18px;
  z-index: 999;
  display: flex;
  align-items: center;
  color: #628cf5;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: 1px solid #628cf5;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 14px;
    opacity: 0.7;
  }
}
</style>
