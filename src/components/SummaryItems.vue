<template>
<div>
  <div class="shopping-Like up" v-if="items.length > 0" >
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="buttons">
        <span @click="removeFromLike(item)" class="delete-btn"></span>
      </div>
      <div class="img">
        <img class="image" :src="item.sprites.front_default" />
      </div>
      <div class="description">
        <span>{{item.name}}</span>
      </div>
      <div class="pokelike">{{item.pokelike}}</div>

      <!-- <div class="quantity">
        <button @click="removeOneFromLike(item)" class="plus-btn" type="button" name="button">-</button>
        <input type="text" name="name" :value="item.quantity" />
        <button @click="addToLike(item)" class="minus-btn" type="button" name="button">+</button>
      </div> -->
      <div class="pokelike">
        <b>{{(item.pokelike * item.quantity)}} Like(s)</b>
      </div>
    </div>
  </div>
  <div class="shopping-Like up" v-else>
    Your Like is empty :(
  </div>
</div>

</template>

<script>


import { mapActions } from "vuex";
export default {
  name: "SummaryItems",
  props: {
    pokemonList: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(["removeFromLike"])
  }
};
</script>

<style lang="scss" scoped>
.shopping {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 2;
  margin-bottom: 100px;
  .up {
    margin-top: -100px;
    padding-bottom: 120px;
  }
}

.shopping-Like {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 700px;
  margin: 20px;
  height: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
}

.title {
  height: 60px;
  color: #5e6977;
  font-size: 20px;
}

.item {
  height: auto;
  display: flex;
  border-bottom: 1px solid #e1e8ee;
  line-height: 50px;
  margin-top: 25px;
}

.buttons {
  position: relative;
  margin-right: 60px;
}

.delete-btn {
  display: inline-block;
  cursor: pointer;
  width: 18px;
  height: 18px;
  background: url("../../public/delete-icn.svg") no-repeat center;
  margin-right: 20px;
}

.img {
  margin-right: 50px;
  align-content: center;
  width: 80px;
}

.image {
  height: 60px;
  width: 60px;
  border-radius: 3px;
}

.description {
  margin-right: 60px;
  width: 100px;
}

.description span {
  display: block;
  font-size: 16px;
  color: #43484d;
  font-weight: 400;
}

.quantity {
  margin-right: 60px;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

button[class*="btn"] {
  width: 20px;
  height: 20px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
button:focus,
input:focus {
  outline: 0;
}

.pokelike {
  width: 80px;
  text-align: center;
  font-size: 14px;
  color: #43484d;
  font-weight: 300;
  margin-left: 8px;
}

@media (max-width: 760px) {
  .shopping-Like {
    box-shadow: none;
  }
  .img,
  .quantity,
  .description {
    margin: auto;
    margin-left: 5px;
    width: auto;
    padding: auto;
  }
}

.button {
  margin-top: 40px;
  outline: none;
}
</style>

