<template>
  <!-- <p>
    <a title="ABV from OG and SG" href="['abvogsg']">
      ABV from OG and FG
    </a>
  </p>
  <p>
    <a title="ABV from SG and Brix" href="['abvsgbrix']">
      ABV from SG and Brix
    </a>
  </p>
  <p>
    <a title="Strike Water Temperature" href="['strikewater']">
      Strike Water Temperature
    </a>
  </p> -->
  <!-- <p>
    <router-link to="/abvogsg">ABV from OG and FG</router-link>
  </p> -->
  <!-- <p>
    <router-link to="/abvsgbrix">ABV from SG and Brix</router-link>
  </p> -->
  <!-- <nav>
    <router-link to="/abvogsg">ABV from OG and FG</router-link>
  </nav> -->
  <nav>
    <p>
      <router-link to="/abvogfg">ABV from OG and FG</router-link>
    </p>
    <p>
      <router-link to="/abvsgbrix">ABV from SG and Brix</router-link>
    </p>
    <div>
      <router-link to="/strikewater">Strike Water Temperature</router-link>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'FeatureList',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
