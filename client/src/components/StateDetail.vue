<template>

<div class="state-info">
    <span class="state-name">{{ state.name }}</span>
    <div>
        <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
    </div>

    <div>
        <!-- Navigating to /map/Iowa or /map/Georgia -->
        <router-link v-bind:to=" {name: 'StateMap', params: { state: state.name } } ">
            <img class="map-icon" src="@/assets/map_icon.png">                      <!-- https://icons8.com/icon/43632/map -->
        </router-link>
        
    </div>

</div>
</template>

<script>
    export default {
        name: 'StateDetail',
        emits: ['update-visited'],
        props: {
            state: Object                               /// don't modify props
        },
        data() {
            return {
                visited: this.state.visited             // ok to modify data
            }
        },
        methods: {
            visitedChanged() {
                this.$emit('update-visited', this.state.name, this.visited)
            }
        }
    }
</script>

<style scoped>
.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px gainsboro;
    border-radius: .3rem;
    background-color: rgba(167, 170, 170, 0.726);
}

.visit-state {
    margin: 1rem;
    text-align: center;
}

.map-icon {
    width: 3rem;
    height: 3rem;
}

</style>
