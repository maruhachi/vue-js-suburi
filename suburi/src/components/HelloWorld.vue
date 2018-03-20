<template>
  <div class="hello">
    <myheader />
    <img src="../assets/logo.png">
    <div>
      <h1 v-if="msg.length > 0">{{ msg }}</h1>
      <h1 v-else> no text </h1>
      <input type="text" v-model="msg" />

      <button @click="clear()">clear button</button>
    </div>
    <router-link to="/members">Goto member page.</router-link>
  </div>
</template>

<script>
import myheader from "./myheader";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    myheader
  },
  methods: {
    clear() {
      this.msg = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
}

input {
  font-size: 20px;
  text-align: center;
  width: 70%;
}
</style>
