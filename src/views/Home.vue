<template>
  <div>
    <pokemon-list
      :pokemon-list="statePokemonDataList"
      :products="stateLikePokemonList"
      @deleteFromLike="deleteFromLike"
      @addToLike="addToLike"
    />
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    PokemonList
  },
  computed: {
    ...mapState(["statePokemonDataList", "stateLikePokemonList"])
  },
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },
  methods: {
    async getPokemonData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await data.json();
      return json.results;
    },
    ...mapActions(["setPokemonData", "addToLike", "deleteFromLike"])
  }
};
</script>

<style lang="scss" scoped>
</style>
