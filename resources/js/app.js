import { createApp } from 'vue'

window._ = require('lodash')
window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Homepage from './components/Homepage'

const app = createApp({})
app.component('homepage', Homepage)
app.mount('#app')
