<template>
  <div>
    <section class="destination">
        <GoBack />
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
          <img :src="`/images/${destination.image}`" :alt="destination.name" />
          <p>{{ destination.description }}</p>
        </div>
      </section>
      <section class="experience mt-5">
        <h2>Top Experiences in {{ destination.name }}</h2>
        <div class="makeMeCards">
          <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name : 'experience.show', params : {experienceSlug : experience.slug}}"
          >
            <ExperienceCard
              :experience="experience"
            />
          </router-link>
        </div>
        <router-view />
      </section>
  </div>
</template>

<script>
import sourceData from "../constant/data.json";
import ExperienceCard from "../components/ExperienceCard.vue";
import GoBack from "../components/GoBack.vue";

export default {
  props: {
    id: { type: Number, required: true },
  },
  components: {
    ExperienceCard,
    GoBack,
  },
  computed: {
    // destinationId(){
    //     return parseInt(this.$route.params.id )
    // },

    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
};
</script>

<style>
.makeMeCards{
    display: flex;
}
</style>
