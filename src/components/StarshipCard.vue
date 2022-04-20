<template>
  <div class="row">
    <div class="flex md6 lg4">
      <va-card stripe stripe-color="success" :to="{name: 'starships-detail', params: {id:id, detailurl:detailurl}}">
        <va-card-title>{{call}}</va-card-title>
        <va-card-content>Cost: {{cost_in_credits}}</va-card-content>
        <va-card-content>Length: {{length}}</va-card-content>
        <va-card-content>By: {{manufacturer}}</va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
    props:[
        "call","cost_in_credits","length","manufacturer", "detailurl", "id"
    ]
}
</script>
