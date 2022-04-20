<template>
  <div class="row">
    <div class="flex md6 lg4">
      <va-card stripe stripe-color="success" :to="{name: 'species-detail', params: {id:id, detailurl:detailurl}}">
        <va-card-title>{{call}}</va-card-title>
        <va-card-content>Classification: {{classification}}</va-card-content>
        <va-card-content>Average Lifespan: {{average_lifespan}}</va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
    props:[
        "call","classification","average_lifespan", "detailurl", "id"
    ]
}
</script>
