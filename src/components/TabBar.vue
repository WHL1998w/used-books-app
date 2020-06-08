<template>
  <div id="tabbar">
    <div class="tab">
      <ul class="tab-bar">
        <li class="tab-bar-item" v-for="(item, index) in nav" :key="index" @click="selectNav(item.title)">
          <span class="tab-bar-item-icon">
            <img :src="isSelect === item.title ? item.url_one : item.url" alt="item.title" class="image" />
          </span>
          <span class="tab-bar-item-text">
            <p :class="isSelect === item.title ? 'active' : ''">{{ item.title }}</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      isSelect: '首页',
      nav: [
        { title: '首页', url: require('@/assets/images/shouye.png'), url_one: require('@/assets/images/shouye2.jpg') },
        { title: '回收', url: require('@/assets/images/huishou.jpg'), url_one: require('@/assets/images/huishou2.png') },
        { title: '书袋', url: require('../assets/images/shudai.jpg'), url_one: require('@/assets/images/shudai2.png') },
        { title: '我的', url: require('@/assets/images/wode.jpg'), url_one: require('@/assets/images/wode2.png') }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {
    this.isSelect = sessionStorage.getItem('isSelect')
  },
  methods: {
    selectNav(title) {
      this.isSelect = title
      switch (title) {
        case '首页':
          this.$router.push('/')
          break
        case '回收':
          this.$router.push('/recycle')
          break
        case '书袋':
          this.$router.push('/bookpocket')
          break
        case '我的':
          this.$router.push('/personal')
          break
      }
      sessionStorage.setItem('isSelect', this.isSelect)
    }
  },
  computed: {
    //   监听路由活跃
    isActive() {
      if (this.isSelect === this.page) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
// tabbBar的css
.tab {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 55px;
  background: #ffffff;
  padding-top: 5px;

  .tab-bar {
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
    .tab-bar-item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-size: 0.8em;
      .tab-bar-item-icon {
      }
    }
    .tab-bar-item .center img {
      width: 60px;
      height: 60px;
      margin-top: -40px;
    }
  }
}
.router-link-exact-active {
  color: rgb(27, 157, 255);
  font-weight: 600;
}
.active {
  color: rgb(27, 157, 255);
  font-size: 0.9rem;
}
.image {
  width: 30px;
  height: 30px;
}
</style>
