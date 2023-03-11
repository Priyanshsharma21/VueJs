<template>
        <div class="home">
                <div class="destinations">
                    <router-link 
                    v-for="destination in destinations" 
                    :key="destination.id"
                    :to="{name : 'destination.show',params : {id : destination.id,slug: destination.slug}}"
                    class="home_route"
                    >
                        {{ destination.name }}
                        <img :src="`/images/${destination.image}`" :alt="destination.image">
                    </router-link>
                </div>
        </div>
</template>

<script>
import sourceData from '../constant/data.json'


export default {
    data(){
        return {
            destinations: sourceData.destinations,
        }
    }
}
</script>


<style>
    .home{
        color: white;
    }
</style>