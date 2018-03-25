import Vue from 'vue';
import App from '../components/app.vue';


// Main page viewmodel
// =============================================================================
const portfolioViewModel = new Vue({
    el: '#vue-app',
    render: (h) => h(App),
});


// Page startup listeners
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.keyCode === 192) {
            const footerElement: HTMLDivElement | null = document.querySelector('.footer-menu');

            if (footerElement) {
                footerElement.classList.add('revealed');
            }
        }
    });
});
