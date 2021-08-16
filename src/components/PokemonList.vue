<template>
    <div class="list">
      <article
        v-for="(pokemon, index) in pokemonList"
        :key="'pokemon-'+index"
        @click="goUrl(index+1)"
      >
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`"
          width="96"
          height="96"
          alt="Pokemon"
        />
        <h3>{{ pokemon.name }}</h3>
      </article>
    </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemonList: {
      type: Array,
      required: true
    },
  },
  computed: {
    pokemonListLength() {
      return this.pokemonList.length;
    }
  },
  methods: {
    async goUrl(id) {
      let route = await this.$router.push("/pokemon/" + id);
      return route;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 510px;

  article {
    height: 150px;
    background-color: #efefef;
    text-align: center;
    text-transform: capitalize;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);

    h3 {
      margin: 0;
    }
  }
}
</style>