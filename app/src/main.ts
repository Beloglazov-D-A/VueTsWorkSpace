import './assets/main.css'
import '@packages/ui/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from '@packages/ui'

const app = createApp(App)

app.use(createPinia())
app.use(createVuetify)
app.use(router)

app.mount('#app')
