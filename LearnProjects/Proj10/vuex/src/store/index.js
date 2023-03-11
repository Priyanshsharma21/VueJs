import { createStore } from 'vuex'
import actions from './actions.js'
import cart from './modules/cart'
import products from './modules/products'

export default createStore({

  state: { // data
  },


  getters: { // computed -> good when we want to show something on runtime
  },


  actions:actions,


  mutations: {// to update the state
  },

  modules: { //
    cart,products
  }
})
