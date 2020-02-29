<template>
  <div
    class="keyboard-key"
    @mousedown="play"
    @mouseup="stop"
    @mouseleave="stop"
    @touchstart="play"
    @touchdown="stop"
    @touchleave="stop"
  />
</template>

<script>
import { Note } from '../lib/audio';

export default {
  name: "KeyboardKey",

  props: {
    freq: Number
  },

  created() {
    this.note = new Note(440);
  },

  methods: {
    play() {
      this.note.play();
    },
    stop() {
      this.note.stop();
    }
  }
};
</script>

<style scoped>
.keyboard-key {
  background: black;
  cursor: pointer;
  height: 50px;
  width: 50px;
}
</style>
