<template>
    <section class="mt-5">
        <h1>{{ experience.name }}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p class="mt-3">{{ experience.description }}</p>
    </section>
</template>



<script>
import sourceData from '../constant/data.json'


export default {
    name : 'ExperienceShow',
    props : {
        id : {type : Number, required : true},
        experienceSlug : {type : String, required : true},
    },

    computed : {
        destination(){
            return sourceData.destinations.find(destination=>destination.id===this.id)
        },

        experience(){
            return this.destination.experiences.find(experience=>experience.slug===this.experienceSlug)
        }
    }
    
}
</script>



<style>
    
</style>