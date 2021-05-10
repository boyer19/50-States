<template>
    <div class="state-list-container">>
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
            <state-detail v-bind:state="state"></state-detail>                                  <!-- Shows each state by name, but in-row -->
        </div>
    </div>
</template>

<script>
import StateDetail from './StateDetail.vue'

export default {
    components: { StateDetail},
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
         }
    }
}
</script>

<style scoped>
    .state-list-container {
        display: flex;
        flex-wrap: wrap;                            /* http://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
        justify-content: space-evenly;
    }

.state-container {
    margin: 1rem;                       
}
</style>