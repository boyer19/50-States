<template>
<!-- needs to have only one element in template so single div tag to contain all -->
<div>
    <div>
        <state-summary v-bind:states="states"></state-summary>
    </div>
  <!-- Styled by flexbox -->
    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
            <state-detail 
                v-bind:state="state"
                v-on:update-visited="updateVisited">
            </state-detail>                                  <!-- Shows each state by name, but in-row -->
        </div>
    </div>
</div>
</template>

<script>
import PageHeader from './PageHeader.vue'
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary'

export default {
    components: { 
        StateDetail,
        StateSummary,
        PageHeader
    },
    name: 'StateList',
    data() {
        return {
            states: []
        }
    },
     mounted() {
        this.fetchAllStates()
     },
    
     methods: {                                                     // methods with an (s)
         fetchAllStates() {
             this.$stateService.getAllStates().then( states => {
                 this.states = states
             })
             .catch( err => {
                 alert('Sorry, cannot fetch state list')
                 console.error(err)
             })
         },
         updateVisited(stateName, visited) {
         // calls to stateService.js setVisited function
            this.$stateService.setVisited(stateName, visited).then( () => {
                this.fetchAllStates() 
            })
            .catch( err => {
                alert('Sorry, can\'t update state')
                console.error(err)
            })
         }
    }
}
</script>

<style scoped>
    .state-list-container {
        display: flex;
        flex-wrap: wrap;                            /* http://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
        justify-content: space-evenly;
        color:rgba(151, 8, 8, 0.801);
        
    }

.state-container {
    margin: 1rem; 
    border: .2rem solid rgba(238, 232, 232, 0.349);                      
}
</style>