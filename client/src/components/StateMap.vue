<template>
<div class="state-map">
    <h2>The State of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state yet</p>

    <!-- todo map here -->

</div>

</template>

<script>

export default {
    name: 'StateMap',
    data() {
        return {
        state: {}
        }
    },
    mounted() {                                                      // lifecycle hook
        this.state.name = this.$route.params.state                      // routes in index.js for StateMap
    }
}

</script>

<style scoped>

</style>