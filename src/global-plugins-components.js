import VueSweetalert2 from 'vue-sweetalert2';
import Components from "./components";

// importação asset
import './assets/scss/app.scss';
import 'sweetalert2/dist/sweetalert2.min.css';

/*
* Importação de componentes e plugins
*/

export default {
 install (Vue) {
     Vue.use(VueSweetalert2)
     Vue.use(Components)
    }
}