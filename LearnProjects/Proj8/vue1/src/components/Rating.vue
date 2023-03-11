<template>
    <div class="main_container_rating">
        <div 
        class="message_none"
        v-if="message === ''"
        >Click Mystery Ball's to see Message inside it</div>
        <div 
        class="message"
        v-else
        >{{ message }}</div>
        <div class="star_box">
            <div 
            class="circle"
            v-for="(msg, index) in circleMessage"
            @click="showInnerHtml(msg)"
            :key="i"
            >{{ index + 1 }}</div>
        </div>
    </div>
</template>


<script>

export default {
    name : 'Rating',
    data(){
        return {
            circleMessage : ["Never let others opinion judge you", "Remember this - BE CONSISTENT", "Workout everyday - Always Remember this.", "EAT HEALTHY", "Be Polite, less Reaction, More Positive Attraction"],
            message : ''
        }
    },
    methods:{
        showInnerHtml(message){
            console.log(message)
            this.message = message;
        }
    }
}

</script>


<style>

.main_container_rating{
    width: 100%;
    height: 100vh;
}
.star_box{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.message_none {
    font-size: 3rem;
    color: rgba(65, 65, 65, 0.847); 
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    animation: color-change 2s ease-in-out infinite;
}

@keyframes color-change {
    0% {
        color: rgba(65, 65, 65, 0.847); 
    }
    50%{
        color: rgb(40, 40, 40); 
    }
    100% {
        color: rgba(65, 65, 65, 0.847); 
    }
}

.message{
    font-size: 3rem;
    background-image: linear-gradient(to right, rgb(153, 238, 130), rgb(128, 0, 0));
    background: violet; /* fallback color */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.circle {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: yellow;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    color: rgb(27, 27, 27);
    transition: transform 0.2s; /* added */
}

.circle:hover {
    transform: scale(1.1); /* added */
    background: rgba(255, 255, 0, 0.74);
}

.circle:active {
    transform: scale(0.91); /* added */
}



</style>