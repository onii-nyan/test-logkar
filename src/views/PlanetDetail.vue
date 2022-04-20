<template>
    <div class="va-table-responsive row">
    <table class="va-table va-table--striped">
      <tbody>
      <tr>
        <th>Name Planet</th>
        <td>{{data.name}}</td>
      </tr>
      <tr>
        <th>Rotation Period</th>
        <td>{{data.rotation_period}}</td>
      </tr>
      <tr>
        <th>Climate</th>
        <td>{{data.climate}}</td>
      </tr>
      <tr>
        <th>Terrain</th>
        <td>
          <va-badge
            :text="data.terrain"
            :color="green"
          />
        </td>
      </tr>
      <tr>
        <th>Population</th>
        <td>{{data.population}}</td>
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
        ...mapState(['detailPlanet']),
        data(){
            return this.detailPlanet
        },
    },
    methods:{
        ...mapActions(['getPlanetById']),
        dataById(){
            this.getPlanetById(this.detailurl)
        },
    },
    mounted(){
        this.dataById()
    }
}
</script>