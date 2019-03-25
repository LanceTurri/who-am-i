import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// TODO: import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

// Page startup listeners
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.keyCode === 192) {
            const footerElement: HTMLDivElement | null = document.querySelector('.footer-menu');

            if (footerElement) {
                footerElement.classList.add('revealed');
            }
        }
    });
});
