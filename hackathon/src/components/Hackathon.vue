<template>
  <div class="hello">
    <h1 id="msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hackathon',
  data () {
    return {
      msg: 'Welcome to the RADHackathon'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

#msg {
  font-family: algerian;
}
</style>
