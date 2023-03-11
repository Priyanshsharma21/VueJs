const App = {
    data(){
        return {
            name : "Priyansh Sharma",
            age : 21
        }
    }
}

Vue.createApp(App).mount("#app")

// Shorthand 

Vue.createApp({
    data(){
        return{
            age : 21
        }
    }
}).mount('#onemore')