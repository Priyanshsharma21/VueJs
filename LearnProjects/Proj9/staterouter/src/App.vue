<template>
    <TheNav />
    <div class="container">
        <router-view v-slot="{Component}" >
            <transition name="fade">
                <component :key="$route.path" :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>


<script>
import TheNav from './components/TheNav.vue';


export default {
    name : 'App',
    components : {
        TheNav,
    },
}

</script>


<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
</style>
