import '@packages/ui/styles'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createVuetify } from '@packages/ui'

const app = createApp(App)

app.use(createPinia())
app.use(createVuetify)

app.mount('#app')
