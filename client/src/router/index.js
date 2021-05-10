import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'              // Joins the AboutSite page in Components
import AboutDesigner from '@/components/AboutDesigner'

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
            name: 'About',
            component: AboutSite
        },
        {
            path: '/designer',
            name: 'Designer',
            component: AboutDesigner
        }
    ]
})