<template>
  <div id="app">
    <header>
      <!-- Title = WIP; Still need to find proper translation for buddy in German -->
      <h1>Glucose "Buddy"</h1>
    </header>
    <main>
      <GlucoseLogs />
    </main>
  </div>
</template>

<script>
import GlucoseLogs from './components/GlucoseLogs.vue';


export default {
  name: 'app',
  components: {
    GlucoseLogs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  margin-bottom: 60px;
}

body {
  background-color: rgb(217, 244, 254);
}
</style>
