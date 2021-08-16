import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statePokemonDataList: [],
    stateLikePokemonList: [],
    stateTotal: 0,
  },
  getters: {
    pokemons: state => {
      return state.statePokemonDataList
    }, 
    minus5: state => {
      return state.statePokemonDataList.filter(pokemon => pokemon.pokelike < 5)
    }, 
    getPokemonByName: (state) => (name) => {
      return state.statePokemonDataList.find(pokemon => pokemon.name === name)
    }
  },
  actions: {
    setPokemonData(context, payload) {
      context.commit("setPokemonData", payload);
    },
    setLikePokemonList(context, payload) {
      context.commit("setLikePokemonList", payload);
    },
    addToLike(context, payload) {
      context.commit("addToLike", payload);
      context.commit("getTotal");
    },
    removeFromLike(context, payload) {
      context.commit("removeFromLike", payload);
      context.commit("getTotal");
    },
    getTotal(context) {
      context.commit("getTotal");
    },
  },
  mutations: {
    setPokemonData(state, list) {
      state.statePokemonDataList = list;
    },
    setLikePokemonList(state, list) {
      state.stateLikePokemonList = list;
    },
    addToLike(state, item) {
      const currentItems = [...state.stateLikePokemonList];
      const findItem = currentItems.find(data => data.name === item.name);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.stateLikePokemonList.push(item);
      }
    },
    removeFromLike(state, item) {
      if (item.quantity > 0) state.stateLikePokemonList.splice(item, 1);
    },
    getTotal(state) {
      const total = Object.values(state.stateLikePokemonList).reduce((t, { pokelike, quantity }) => t + pokelike * quantity, 0)
      state.stateTotal = total;
    }
  }
}); 