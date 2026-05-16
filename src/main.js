import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme: {
                dark: false,
                colors: {
                    red: '#ED2B34',
                    orange: '#FF7B00',
                    yellow: '#FFFF1B',
                    green: '#67DB14',
                    'light-blue': '#00F2FF',
                    blue: '#4058F6',
                    purple: '#AB04F9',
                }
            }
        }
    },
})

createApp(App).use(vuetify).mount('#app')
