/*
  Set up the audio context
*/
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const masterGainNode = audioContext.createGain();
masterGainNode.connect(audioContext.destination);

export class Note {
  oscillator = audioContext.createOscillator();

  constructor(freq, type) {
    this.freq = freq;
    this.type = type;
    this.oscillator.frequency.value = this.freq;
    this.oscillator.start();
  }

  play() {
    this.oscillator.connect(masterGainNode);
  }

  stop() {
    this.oscillator.disconnect(masterGainNode);
  }
}
