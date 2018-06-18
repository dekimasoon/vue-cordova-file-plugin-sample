import 'typeface-roboto';
import 'material-design-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.css';
import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import cordovaLoader from './cordovaLoader';
import vuetify from 'vuetify';

Vue.config.productionTip = false

Vue.use(vuetify);

cordovaLoader(() => {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
});
