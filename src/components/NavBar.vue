<template>
  <va-navbar color="dark" text-color="#cdcdcd">
    <template #center>
      <va-navbar-item >
        <router-link to="/">Planets</router-link> 
      </va-navbar-item>
        <router-link :to="{name: 'species'}">Species</router-link> 
      <va-navbar-item>
        <router-link :to="{name: 'starships'}">Starships</router-link> 
      </va-navbar-item>
    </template> 
  </va-navbar>
  <router-view/>
</template>

<style>
a{
  color: #cdcdcd;
}
a.router-link-exact-active {
  color: #42b983;
}
</style>
