import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi, aliases as mdiAliases } from 'vuetify/iconsets/mdi';
import { mdiIconAliases } from '@jsonforms/vue-vuetify';
import '@mdi/font/css/materialdesignicons.css';

// Components
import App from './App.vue'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi,
        },
        aliases: { ...mdiAliases, ...mdiIconAliases }
    },
    components,
    directives,
})

createApp(App).use(vuetify).mount('#app')