<template>
  <div class="row">
    <div class="flex md6 lg4">
      <va-card stripe stripe-color="success" :to="{name: 'planet-detail', params: {id:id, detailurl:detailurl}}">
        <va-card-title>{{call}}</va-card-title>
        <va-card-content>Population: {{population}}</va-card-content>
        <va-card-content>Terrain: {{terrain}}</va-card-content>
      </va-card>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
    props:[
        "id","call","population","terrain", "detailurl"
    ],
}
</script>