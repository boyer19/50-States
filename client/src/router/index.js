import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'              // Joins the AboutSite page in Components
import AboutDesigner from '@/components/AboutDesigner'
import StateMap from '@/components/StateMap'
import AllStatesVisited from '@/components/AllStatesVisited'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList 
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/designer',
            name: 'AboutDesigner',
            component: AboutDesigner
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/visited',
            name: 'AllStatesVisited',
            component: AllStatesVisited
        }
    ]
})