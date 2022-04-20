<template>
  <div class="about">
    <species-card v-for="(species, i) in listSpecies"
      :key="i"
      :id="i"
      :call="species.name"
      :classification="species.classification"
      :average_lifespan="species.average_lifespan"
      :homeworld="species.homeworld"
      :detailurl="species.url"
      />
  </div>
  <div class="btn">
    <va-button outline color="white" text-color="white" class="mr-4"  v-show="species.previous" @click="prevPage()">Prev</va-button>
    <va-button outline color="white" text-color="white" class="mr-4"   v-show="species.next" @click="nextPage()">Next</va-button>
  </div>
</template>

<script>
import SpeciesCard from '@/components/SpeciesCard.vue'
import {mapState, mapActions} from 'vuex'

export default {
  components: { SpeciesCard },
  name: 'SpeciesView',
  computed:{
      ...mapState(['species']),
      listSpecies(){
        return this.species.results
      }
    },
  methods:{
    ...mapActions(['getDataSpecies']),
    nextPage(){
        this.getDataSpecies(this.species.next)
    },
    prevPage(){
        this.getDataSpecies(this.species.previous)
    }
  },
  mounted(){
        this.getDataSpecies()
    },
}
</script>