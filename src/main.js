import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Import Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

/* Import Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const app = createApp(App)

app.use(router)

app.mount('#app')

/*  Use Font Awesome */
app.component('font-awesome-icon', FontAwesomeIcon)

/* Global Properties */
app.config.globalProperties.$apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'
app.config.globalProperties.$linkedinUrl = import.meta.env.VITE_LINKEDIN_URL ?? 'https://www.linkedin.com/'
app.config.globalProperties.$githubUrl = import.meta.env.VITE_GITHUB_URL ?? 'https://github.com/'