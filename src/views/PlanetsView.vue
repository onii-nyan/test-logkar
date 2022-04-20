<template>
  <div>
    <PlanetCard v-for="(planet, i) in listPlanets" 
      :key="i"
      :id="i"
      :call="planet.name"
      :population="planet.population"
      :terrain="planet.terrain"
      :detailurl="planet.url"/>
  </div>
  <div class="btn">
    <va-button outline color="white" text-color="white" class="mr-4" v-show="planets.previous" @click="prevPage()">Prev</va-button>
    <va-button outline color="white" text-color="white" class="mr-4"  v-show="planets.next" @click="nextPage()">Next</va-button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import PlanetCard from '../components/PlanetCard.vue'

export default {
  name: 'PlanetsView',
  components:{
    PlanetCard
  },
  computed:{
      ...mapState(['planets']),
      listPlanets(){
        return this.planets.results
      }
    },
  methods:{
    ...mapActions(['getDataPlanets']),
    nextPage(){
        this.getDataPlanets(this.planets.next)
    },
    prevPage(){
        this.getDataPlanets(this.planets.previous)
    }
  },
  mounted(){
        this.getDataPlanets()
    },
}
</script>

