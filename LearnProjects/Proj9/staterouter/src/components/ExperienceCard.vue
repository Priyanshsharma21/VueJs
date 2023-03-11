<template>
    <div class="cards mx-3">
        <img class="card_imgs" :src="`/images/${experience.image}`" :alt="experience.name">

        <span class="card__text">
            {{ experience.name }}
        </span>
    </div>
</template>




<script>
export default {
    name : 'ExperienceCard',
    props : {
        experience : {type : Object, required : true}
    }
}
</script>


<style>

.cards{
    display: flex;
    flex-wrap: wrap;
}

.card_imgs{
    width: 250px;
    height: 200px;
}
    
</style>