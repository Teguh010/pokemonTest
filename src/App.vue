<template>
  <div id="app">
    <app-navbar />
    <router-view class="container" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    appNavbar: Navbar
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

:root{
  $--color-bone: #E4E4CE;
  $--color-columbia-blue: #C8D4E1;
  $--color-flax: #E4E4CE;
  $--color-ligth-abricot: #FDD2AC;
}

.container {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  background: radial-gradient(#ffeead, #ff8838);

  font-family: "Roboto", arial;
  font-size: 1rem;
  font-weight: normal;
}

h1 {
  color: #efefef;
}
</style>
