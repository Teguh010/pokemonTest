<template>
  <div class="detail">
    <div class="detail-view" v-if="pokemonData && pokemonDescription">
      <div class="image">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`"
          :alt="pokemonData.name"
        />
      </div>
      <div class="data">
        <h2>{{ pokemonData.name }}</h2>
        <p class="description">{{ pokemonDescription[0].flavor_text }}</p>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">{{ pokemonData.base_experience }} XP</div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">{{ pokemonData.height / 10 }} m</div>
        </div>
        <div class="property">
          <div class="left">Weight</div>
          <div class="right">{{ pokemonData.weight / 10 }} kg</div>
        </div>
        <div class="property">
          <div class="left">pokelike</div>
          <div class="right">{{ pokemonData.pokelike }} $</div>
        </div>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div
            class="type"
            v-for="(value, index) in pokemonData.types"
            :key="'value'+index"
          >{{ value.type.name }}</div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div
            class="ability"
            v-for="(value, index) in pokemonData.abilities"
            :key="'value'+index"
          >{{ value.ability.name }}</div>
        </div>
      </div>
      <div class="action">
        <button class="button close" @click="goBack()">close</button>
        <button class="button add" @click="addLike(pokemonData)">Like</button>
      </div>
    </div>
    <i v-else class="fas fa-spinner fa-spin"></i>
  </div>
</template>

<script>
export default {
  name: "PokemonDetail",
  props: {
    pokemonId: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      pokemonData: null,
      pokemonDescription: null, 
    };
  },
  async created() {
    if (this.pokemonId) {
      this.pokemonData = await this.getDataSpecificPokemon(this.pokemonId);
      this.pokemonDescription = await this.getPokemonDescription(
        this.pokemonData
      );
    }
  },
  methods: {
    async getDataSpecificPokemon(id) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const json = await data.json();
      const pokelike = await this.getpokeLike();
      return { ...json, pokelike: pokelike, quantity: 1};
    },
    async getPokemonDescription(pokemonData) {
      const data = await fetch(`${pokemonData.species.url}`);
      console.log("this is")
      const json = await data.json();
      return json.flavor_text_entries.filter(function(element) {
        return element.language.name === "en";
      });
    
    },
    async getpokeLike() {
      const pokelike = await 1;
      return pokelike;
    }, 
    addLike(pokemon) {
      this.$emit("addToLike", pokemon);
    },
    goBack(){
      return this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 90px 10px 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  margin-bottom: 200px;

  .detail-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 510px;
    padding: 50px 0 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -60px;
      width: 120px;
      height: 120px;
      background-color: #333;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
    }

    h2 {
      text-transform: capitalize;
    }

    .data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 40px;

      .description {
        width: 90%;
        max-width: 400px;
        margin-bottom: 20px;
      }

      .property {
        width: 90%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;

        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }

      h3 {
        width: 90%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
      }

      .types,
      .abilities {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 90%;
        max-width: 400px;

        .type,
        .ability {
          margin: 0 10px 10px 0;
          padding: 5px 10px;
          border-radius: 20px;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: capitalize;
          word-wrap: none;
          word-break: keep-all;
        }

        .type {
          background-color: #0a2e50;
        }
        .ability {
          background-color: #c73015;
        }
      }
    }

    .action {
      display: inline-block;
    }
    .button {
      margin: 10px;
      outline: none;
      border: none;
      border-radius: 5px;
      color: #efefef;
      padding: 10px 20px;
      margin-bottom: 20px;
      font-size: 1.2rem;
      cursor: pointer;
      &.close {
        background-color: #333;
      }
      &.add {
        background-color: green;
      }
      &:hover{
        opacity: 0.6;
      }
    }
  }

  i {
    font-size: 2rem;
    color: #efefef;
  }
}
</style>