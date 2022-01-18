<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import useCounterStore from './store/counterStore'

const counterStore = useCounterStore()

const handleAddCount = () => {
  counterStore.increment()
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>pinia {{ counterStore.versionText }}</h1>
  <h1>nums {{ counterStore.count }}</h1>
  <span @click="handleAddCount">Add</span>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
