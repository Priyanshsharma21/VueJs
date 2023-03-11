<template>
  <TheNav />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :key="$route.path" :is="Component"></component>
      </transition>
    </router-view>
  </div>

  <div class="checkoutStatus" v-if="checkoutStatus !== null">
    {{ checkoutStatus }}
  </div>

  <div class="total">
    Total - {{ total.toFixed(2) }}
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import { mapGetters, mapState } from 'vuex';

export default {
  name : 'App',
  components : {
    TheNav,
  },
  computed :{
    ...mapState('cart',{
      checkoutStatus : state=>state.checkoutStatus,
    }),

    ...mapGetters('cart',{
      total : 'cartTotal',
    }),
    
    // total(){
    //   return this.$store.getters.cartTotal;
    // },
  }

};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.checkoutStatus{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(89, 255, 0, 0.354);
  color: rgb(255, 255, 255);
  font-size: 2rem;
  padding: 1rem;
  font-family: "Helvetica Neue", "Helvetica";
  font-weight: 800;
  position: fixed;
  bottom: 100px;
}

.total{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.354);
  color: black;
  font-size: 2rem;
  padding: 1rem;
  font-family: "Helvetica Neue", "Helvetica";
  font-weight: 800;
  position: fixed;
  bottom: 0;
}
</style>
