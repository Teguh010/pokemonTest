
<template>
  <div class="nav">
    <div class="title">Pokemon</div>
    <div class="search">
    </div>
    <router-link to="/home" class="Like">Home</router-link>
    <router-link to="/Like" class="Like" v-if="stateTotal > 0">{{stateTotal}} Like(s) </router-link>
    <router-link to="/Like" class="Like" v-else>Liked</router-link>
  </div>
</template>

<script>

import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["stateTotal", "statePokemonDataList"]),
    ...mapGetters(["pokemons"])
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    search(input) {
      if (input.length < 1) {
        return [];
      }
     //  return pokemons.filter(pokemon => {
     //    return pokemon.toLowerCase().startsWith(input.toLowerCase());
     //  });
      console.log(this.$store.getters.pokemons);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  line-height: 60px;
  text-align: center;
  background-color: #FDD2AC;

  .title {
    width: 140px;
    font-size: 1.6em;
  }
  .search {
    flex: 1;
  }
  .Like {
    width: 120px;
    justify-self: center;
    font-size: 1.2em;
    font-weight: 700;
    text-decoration: none;
    color: black;
  }
  .Like:hover{
    background-color: rgb(251, 186, 129);
  }
}
</style>