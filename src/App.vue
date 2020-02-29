<template>
  <div id="app">
    <Keyboard />
  </div>
</template>

<script>
import Keyboard from "./components/Keyboard.vue";

export default {
  name: "Muton",
  components: {
    Keyboard
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
