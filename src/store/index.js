import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 放全局参数
    goods: []
  },
  getters: {
    // get方法
    goods: state => state.goods
  },
  mutations: {
    // 这里放set方法
    setGoods (state, { goods }) {
      state.goods = goods
    }
  },
  actions: {

  },
  modules: {
    // 这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
  }
})
