import 'muse-ui/dist/muse-ui.css';
import Vue from 'vue';
import MuseUI from 'muse-ui';
import MuseUILoading from '../src';
import App from './App';
Vue.use(MuseUI);
Vue.use(MuseUILoading);

const app = new Vue({
  ...App
});

app.$mount('#app');
