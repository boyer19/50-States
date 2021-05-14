<template>
    <div>

        <h2>You have visited these States</h2>
        <p>A Vue.js site by Matt B</p>
    </div>
</template>

<script>
export default {
    name: 'AllStatesVisited',
    data() {
        return {
            states: []
        }
    },
     mounted() {
        this.showAllVisited()
     },
    
     methods: {                                                     // methods with an (s)
         showAllVisited() {
             this.$stateService.getAllStates().then( states => {
                 this.visited = states.visited
             })
             .catch( err => {
                 alert('Sorry, cannot fetch state list')
                 console.error(err)
             })
        },
     }
}   
</script>

<style scoped>

</style>