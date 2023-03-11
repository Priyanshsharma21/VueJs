<template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="incrementCounter">Increment</button>
      <child-component :counter="counter" @increment="incrementCounter"/>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    name: 'ParentComponent',
    data() {
      return {
        counter: 0,
      }
    },
    computed: {
      message() {
        return `Counter: ${this.counter}`;
      }
    },
    methods: {
      incrementCounter() {
        this.counter++;
      }
    },
    components: {
      ChildComponent
    },
    props: {
      initialCount: {
        type: Number,
        default: 0
      }
    },
    watch: {
      counter(newValue, oldValue) {
        console.log(`counter changed from ${oldValue} to ${newValue}`);
      }
    },
    mounted() {
      console.log('Component mounted');
    },
    created() {
      this.counter = this.initialCount;
      console.log('Component created');
    },
    updated() {
      console.log('Component updated');
    },
    destroyed() {
      console.log('Component destroyed');
    }
  }
  </script>
  