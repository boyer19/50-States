import { createRouter, createWebHashHistory } from 'vue-router'

import StateList from '@/components/StateList'

export default createRouter({
    history: createWebHashHistory(),
    routers: [
        {
            path: '/',
            name: 'StateList',
            components: StateList 
        }
    ]
})