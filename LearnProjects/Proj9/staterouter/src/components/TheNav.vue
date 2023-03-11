<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <div class="destinations">
            <router-link 
            v-for="destination in destinations" 
            :key="destination.id"
            :to="{name : 'destination.show',params : {id : destination.id, slug: destination.slug}}"
            >
                {{ destination.name }}
            </router-link>
        </div>
    </div>
</template>


<script>
import sourceData from '../constant/data.json'
 
export default {
    name : 'TheNav',
    data(){
        return{
            destinations : sourceData.destinations
        }
    }
}
</script>


<style>
    #nav .vac-active-link{
        color: rgb(0, 255, 149);
    }
</style>