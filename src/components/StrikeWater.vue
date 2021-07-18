<template>
  <h2>Strike Water Temperature</h2>
  <div id="strikewater">
    <div>
      <label for="malt">
        Malt temperature
      </label>
      <input type="number" id="malt" v-model="malt">
    </div>
    <div>
      <label for="target">
        Target temperature
      </label>
      <input type="number" id="target" v-model="target">
    </div>
    <div>
      <label for="ratio">
        Water to malt ratio
      </label>
      <input type="number" id="ratio" v-model="ratio" step=".1">
    </div>
    <div>
      {{ message }}
    </div>
    <div>
      <button v-on:click="calctemp">Calculate Temperature</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ABVfromSGandBrix',
  methods: {
    calctemp() {
      const temp = (0.2 / ratio.value * (target.value - malt.value) + Number(target.value)).toFixed(1);
      this.message = 'Strike water temperature is ' + temp;
    }
  },
  data() {
    return {
      malt: 55,
      target: 152,
      ratio: 1.4,
      message: 'Enter parameters then click below'
    }
  },
}
</script>
