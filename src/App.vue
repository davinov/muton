<template>
  <div id="app">
    <KeyboardKey/>
  </div>
</template>

<script>
import KeyboardKey from "./components/KeyboardKey.vue";

export default {
  name: "Muton",
  components: {
    KeyboardKey
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
