<template>
<div class="state-map">
    <h2>The State of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state yet</p>

    <!-- map here -->
    <div id="map-container" v-if="dataReady">               <!-- only true when data is ready and api call has been completed -->
        <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors">
            </l-tile-layer>
        </l-map>
    </div>
</div>

</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
export default {
    name: 'StateMap',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            state: {},
            dataReady: false,
            mapReady: false 
        }
    },
    mounted() {                                                      // lifecycle hook
        this.state.name = this.$route.params.state                      // routes in index.js for StateMap
        // makes a request to fetch the state data
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOneState(this.state.name).then( state => {
                this.state = state 
                this.dataReady = true
            }).catch( err => {
                // 404 not found
                if ( err.response && err.response.status === 404 ) {
                    this.state.name = '?'                               // todo think about a better way to communicate to the user
                } else {
                     // 500 server error
                    alert('Sorry, error fetching data about this state') // General message for user
                    console.error(err) // for the developer
                }
            })
        },
    // Checks to see if map is ready and data is ready
        onMapReady() {
            this.mapReady = true
        },
        setMapView() {
            if (this.mapReady && this.dataReady) {
                // todo - make sure map shows correct part of world and zoom level.
                this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
            }
        }
    },
    computed: {
        mapCenter() {
            return [ this.state.lat, this.state.lon]
        }
    }
}

</script>

<style scoped>
#map-container {
    height: 30rem;
}
</style>