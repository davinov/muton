<template>
  <div class="keyboard">
    <KeyboardKey
      class="key"
      v-for="key in keys"
      :key="key.idx"
      :freq="key.freq"
    />
  </div>
</template>

<script>
import KeyboardKey from "./KeyboardKey";

// Keys from D3 to D4 on a regular piano
// Formula from https://en.wikipedia.org/wiki/Piano_key_frequencies
// const KEYS = [...Array(13)].map(function(_, i) {
//   return {
//     idx: i,
//     freq: 440 * Math.pow(2, (i - 10) / 12)
//   };
// });

// A division of the octave in 17 tones instead of 12
const KEYS = [...Array(18)].map(function(_, i) {
  return {
    idx: i,
    freq: 293.665 * Math.pow(2, i / 17)
  };
});

export default {
  name: "Keyboard",

  components: {
    KeyboardKey
  },

  data() {
    return {
      keys: KEYS
    };
  }
};
</script>

<style scoped>
.keyboard {
  display: flex;
  flex-direction: row;
  height: 200px;
  justify-content: space-around;
}

.key {
  height: 100%;
  flex: 1;
}
</style>
