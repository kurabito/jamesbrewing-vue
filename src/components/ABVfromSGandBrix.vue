<template>
  <h2>ABV from SG and Brix</h2>
  <div id="abvsgbrix">
    <p>
      <label for="sg">
        Specific gravity
      </label>
      <input type="number" id="sg" v-model="sg" step=".001">
    </p>
    <p>
      <label for="brix">
        Brix
      </label>
      <input type="number" id="brix" v-model="brix" step=".1">
    </p>
    <p>
      {{ message }}
    </p>
    <p>
      <button v-on:click="calcabv">Calculate ABV</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ABVfromSGandBrix',
  methods: {
    calcabv() {
      const abv = (1.646 * brix.value - 2.703 * (145 - 145 / sg.value)-1.794).toFixed(1);
      this.message = 'The ABV is ' + abv + '%';
    }
  },
  data() {
    return {
      sg: 1.01,
      brix: 8,
      message: 'Enter gravity and brix then click below'
    }
  },
}
</script>
