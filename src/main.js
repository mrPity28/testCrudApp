import { createApp  } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
//import VueSweetalert2 from 'sweetalert2';
//import 'sweetalert2/dist/sweetalert2.min.css';
import "./index.css";
import {router} from "./router/index";

const pinia = createPinia();



const aplication = createApp(App)
aplication.use(router)
aplication.use(pinia)
//aplication.use(VueSweetalert2);

aplication.mount('#app')