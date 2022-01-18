import { defineStore } from 'pinia'

const useCounterStore = defineStore('count', {
  state: () => { 
    return {
      count: 1,
      version: '2.0.9'
    }
  },
  getters: {
    versionText: state => 'version:' + state.version 
  },
  actions: {
    increment() { 
      this.count++
    }
  }
})

export default useCounterStore
