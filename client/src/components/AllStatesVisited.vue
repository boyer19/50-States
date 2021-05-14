<template>
    <div>

        <h2>You have visited these States</h2>
        
 <!-- Optionally adding a v-bind key to fix the warning on line 10 -->
        <!-- <p v-for="state in states" v-bind:key="state.name"> -->
        <!-- <p v-for="state in states"> -->

        <p id="visited-states" v-for="state in states" v-bind:key="state.name"> 
            {{ state.name}}
        </p>
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
            // call the new service method in stateService.js
             this.$stateService.getAllVisitedStates().then( states => {
                 this.states = states  //set the states data
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
#visited-states {
    color: rgba(151, 8, 8, 0.801);
}
</style>