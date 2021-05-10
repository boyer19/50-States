import { createApp } from 'vue'
import App from './App.vue'


import StateAPIService from '@/services/stateService'

import router from '@/router'       // Needs forward slash

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)

app.mount('#app')
