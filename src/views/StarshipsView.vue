<template>
  <div class="about">
    <starship-card v-for="(starship, i) in listStarship"
      :key="i"
      :id="i"
      :call="starship.name"
      :cost_in_credits="starship.cost_in_credits"
      :length="starship.length"
      :manufacturer="starship.manufacturer"
      :detailurl="starship.url"/>
  </div>
  <div class="btn">
    <va-button outline color="white" text-color="white" class="mr-4"  v-show="starships.previous" @click="prevPage()">Prev</va-button>
    <va-button outline color="white" text-color="white" class="mr-4"   v-show="starships.next" @click="nextPage()">Next</va-button>
  </div>
</template>

<script>
import StarshipCard from '@/components/StarshipCard.vue'
import {mapState, mapActions} from 'vuex'

export default {
  components: { StarshipCard },
  name: 'StarshipsView',
  computed:{
      ...mapState(['starships']),
      listStarship(){
        return this.starships.results
      }
    },
  methods:{
    ...mapActions(['getDataStarships']),
    nextPage(){
        this.getDataStarships(this.starships.next)
    },
    prevPage(){
        this.getDataStarships(this.starships.previous)
    }
  },
  mounted(){
        this.getDataStarships()
    },
}
</script>
