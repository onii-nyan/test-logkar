import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

  const url = "https://swapi.dev/api"

const store = createStore({
    state: {
         species : {},
         planets: {},
         starships: {},
         detailSpecies:{},
         detailStarship:{},
         detailPlanet:{},
    },
    mutations: {
        setDataSpecies(state, species){
            state.species = species
        },
        setDataPlanets(state, planets){
            state.planets = planets
        },
        setDataStarships(state, starships){
            state.starships = starships
        },
        setStarshipById(state, detailData){
            state.detailStarship = detailData
        },
        setPlanetById(state, detailData){
            state.detailPlanet = detailData
        },
        setSpeciesById(state, detailData){
            state.detailSpecies = detailData
        },
    },
    actions: {
        async getDataSpecies(ctx, nexturl){
            try {
                const res = await axios.get(nexturl ??url+"/species");
                if(!res.data.Search){
                    res.data.Search=[]
                }
                ctx.commit("setDataSpecies", res.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getDataPlanets(ctx, nexturl){
            try {
                const res = await axios.get(nexturl ?? url+"/planets");
                if(!res.data.Search){
                    res.data.Search=[]
                }
                ctx.commit("setDataPlanets", res.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getDataStarships(ctx, nexturl){
            try {
                const res = await axios.get(nexturl ??url+"/starships");
                if(!res.data.Search){
                    res.data.Search=[]
                }
                ctx.commit("setDataStarships", res.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getPlanetById(ctx, urlDetail){
            try {
                const res = await axios.get(urlDetail);
                ctx.commit("setPlanetById", res.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getStarshipsById(ctx, urlDetail){
            try {
                const res = await axios.get(urlDetail);
                ctx.commit("setStarshipById", res.data)
            } catch (error) {
                console.log(error);
            }
        },
        async getSpeciesById(ctx, urlDetail){
            try {
                const res = await axios.get(urlDetail);
                ctx.commit("setSpeciesById", res.data)
            } catch (error) {
                console.log(error);
            }
        },
    },
    plugins: [vuexLocal.plugin]
  })

  export default store