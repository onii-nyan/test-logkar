<template>
    <div class="va-table-responsive row">
    <table class="va-table va-table--striped">
      <tbody>
      <tr>
        <th>Name Planet</th>
        <td>{{data.name}}</td>
      </tr>
      <tr>
        <th>Model</th>
        <td>{{data.model}}</td>
      </tr>
      <tr>
        <th>Manufacturer</th>
        <td>{{data.manufacturer}}</td>
      </tr>
      <tr>
        <th>Cost</th>
        <td>{{data.cost_in_credits}}</td>
      </tr>
      <tr>
        <th>Length</th>
        <td>{{data.length}}</td>
      </tr>
      <tr>
        <th>Passengers</th>
        <td>{{data.passengers}}</td>
      </tr>
      <tr>
        <th>Consumables</th>
        <td>{{data.consumables}}</td>
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
        ...mapState(['detailStarship']),
        data(){
            return this.detailStarship
        },
    },
    methods:{
        ...mapActions(['getStarshipsById']),
        dataById(){
            this.getStarshipsById(this.detailurl)
        },
    },
    mounted(){
        this.dataById()
    }
}
</script>