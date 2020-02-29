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
    this.note = new Note(this.freq);
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
  border: solid black 1px;
  cursor: pointer;
}
</style>
