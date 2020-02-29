/*
  Set up the audio context
*/
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const masterGainNode = audioContext.createGain();
masterGainNode.connect(audioContext.destination);

export class Note {
  oscillator = undefined;

  constructor(freq, type) {
    this.freq = freq;
    this.type = type;
  }

  play() {
    if (!this.oscillator) {
      this._initOscillator();
    }
    this.oscillator.start();
  }

  stop() {
    if (this.oscillator) {
      this.oscillator.stop();
    }
    this.oscillator = undefined;
  }

  _initOscillator() {
    this.oscillator = audioContext.createOscillator();
    this.oscillator.connect(masterGainNode);
  }
}
