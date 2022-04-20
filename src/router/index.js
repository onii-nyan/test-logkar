import { createRouter, createWebHistory } from 'vue-router'
import planetView from '../views/PlanetsView.vue'
import speciesView from '../views/SpeciesView.vue'
import starshipsView from '../views/StarshipsView.vue'
import planetDetail from '../views/PlanetDetail.vue'
import speciesDetail from '../views/SpeciesDetail.vue'
import starshipsDetail from '../views/StarshipsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'planet',
    component: planetView
  },
  {
    path: '/planet/:id',
    name: 'planet-detail',
    component: planetDetail,
    props:true
  },
  {
    path: '/species',
    name: 'species',
    component: speciesView
  },
  {
    path: '/species/:id',
    name: 'species-detail',
    component: speciesDetail,
    props:true
  },
  {
    path: '/starships',
    name: 'starships',
    component: starshipsView
  },
  {
    path: '/starships/:id',
    name: 'starships-detail',
    component: starshipsDetail,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
