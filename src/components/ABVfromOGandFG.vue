<template>
  <h2>ABV from OG and FG</h2>
  <div id="abvogfg">
    <p>
      <label for="og">
        Original gravity
      </label>
      <input type="number" id="og" v-model="og" step=".001">
    </p>
    <p>
      <label for="fg">
        Final gravity
      </label>
      <input type="number" id="fg" v-model="fg" step=".001">
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
// import Vue from 'vue';
// import message from App;
// let msg2 = 'msg2'; 

// const ABVfromOGandFG = {
//   data() {
//     og = 1.05;
// // fg: 1.01,
//   //  const message = '';
//     return {
//       og,
//       fg: 1.01,
//       fjdkslf: 2,
//       msg2: 'msg2',
//       message: 'Enter gravities then click below'
//     }
//   },
//   // props: {
//   //   og: 1.05,
//   //   fg: 1.01
//   // },
//   // methods: {
//   //   calcabv() {
//   //     // abv = (100 * ((og - fg) / 0.75)).toFixed(1);
//   //     abv = 100;
//   //     this.message = 'The ABV is '+abv+'%';
//   //   }
//   // }
//   msg2: 'from abvogfg'
// }

// ABVfromOGandFG.message = 'jfkd jfkld jfkdl ';

// Vue.createApp(ABVfromOGandFG).mount('#abvogfg')

export default {
  name: 'ABVfromOGandFG',
  props: {
    // og: String,
    // fg: String,
    // msg2: String,
    // message: ''
  },
  methods: {
    calcabv() {
      const abv = (100 * (og.value - fg.value) / 0.75).toFixed(1);
      this.message = 'The ABV is ' + abv + '%';
    }
  },
  data() {
    return {
      og: 1.05,
      fg: 1.01,
      message: 'Enter gravities then click below'
    }
  },
}
</script>
