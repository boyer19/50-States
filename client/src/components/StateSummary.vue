<template>
    <div>
        <p>There are {{ states.length }} states and the District of Columbia </p>
        <p>You have visited {{ totalVisited }} {{ units }}! </p>
        <p id="all-visited-message" v-if="areAllVisited">You have visited all the states and the District of Columbia!</p>

    <!-- To check if areAllVisited works insert in to dev tools Console: document.querySelectorAll("input").forEach(el => { el.checked= true; el.click(); }) -->
    <!-- then use document.querySelectorAll("input").forEach(el => { el.checked= false; el.click(); }) -->
    </div>
</template>

<script>

export default {
    // component child of StateList, won't be accessed thru routing
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        totalVisited() {
            let visitedCount = 0 
            this.states.forEach( state => {
                if (state.visited) {
                    visitedCount++
                }
            })
            return visitedCount
        },
    // Computed property to show state/states depending on number visited
        units() {
            if (this.totalVisited == 1) {
                return 'state'
            } else {
                return 'states'
            }
        },
        areAllVisited() {
            return this.totalVisited === this.states.length
        }
    }
}
</script>


<style scoped>
#all-visited-message {
    color: blue;
    font-weight: 600;
}
</style>