<template>
    <div class="va-table-responsive row">
    <table class="va-table va-table--striped">
      <tbody>
      <tr>
        <th>Name Planet</th>
        <td>{{data.name}}</td>
      </tr>
      <tr>
        <th>Classification</th>
        <td>{{data.classification}}</td>
      </tr>
      <tr>
        <th>Average Height</th>
        <td>{{data.average_height}}</td>
      </tr>
      <tr>
        <th>Skin Colors</th>
        <td>{{data.skin_colors}}</td>
      </tr>
      <tr>
        <th>Hair Colors</th>
        <td>{{data.hair_colors}}</td>
      </tr>
      <tr>
        <th>Eye Colors</th>
        <td>{{data.eye_colors}}</td>
      </tr>
      <tr>
        <th>Average Lifespan</th>
        <td>{{data.average_lifespan}}</td>
      </tr>
      <tr>
        <th>Homeworld</th>
        <td>
          <va-badge
            :text="homeworld.name"
            color="#4287f5"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    props:["detailurl"],
    computed:{
        ...mapState(['detailPlanet', 'detailSpecies']),
        homeworld(){
            return this.detailPlanet
        },
        data(){
            return this.detailSpecies
        },
    },
    methods:{
        ...mapActions(['getPlanetById', 'getSpeciesById']),
        dataHomeworld(){
            this.getPlanetById(this.data.homeworld)
        },
        dataById(){
            console.log(this.detailurl)
            this.getSpeciesById(this.detailurl)
        },
    },
    mounted(){
        this.dataById()
        this.dataHomeworld()
    }
}
</script>