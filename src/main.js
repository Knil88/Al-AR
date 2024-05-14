import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'; // Importa il file CSS di AOS
import AOS from 'aos'; // Importa AOS
createApp(App).use(AOS).mount('#app')
