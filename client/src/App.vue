<template>
  <div>
    <page-header></page-header>

   

    <router-view></router-view>       <!-- uses index.js to display StateList -->

    <page-footer></page-footer>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import StateList from './components/StateList.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    StateList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   border-radius: 1rem;
  border: .3rem solid slategrey ;
  background-color:rgba(117, 148, 81, 0.527);

}
</style>
