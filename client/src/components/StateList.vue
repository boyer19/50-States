<template>
    <div>
        <p v-for="state in states" v-bind:key="state.name">
            {{ state.name }}                                    <!-- Shows each state by name, but in-row -->
        </p>
    </div>
</template>

<script>

export default {
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

</style>