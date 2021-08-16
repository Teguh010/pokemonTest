<template>
  <div>
    <summary-items
      :pokemon-list="statePokemonDataList"
      :items="stateLikePokemonList"
      @addToLike="addToLike"
    />
  </div>
</template>

<script>
import SummaryItems from "@/components/SummaryItems";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    SummaryItems
  },
  computed: {
    ...mapState(["statePokemonDataList", "stateLikePokemonList"]),
  },
  methods: {
    ...mapActions(["addToLike"]),
  }
};
</script>