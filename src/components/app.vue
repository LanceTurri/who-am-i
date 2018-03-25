<template>
    <main id="vue-app" class="main-wrapper" :class="backgroundImage">
		<nav-section @chooserandomfont="chooseRandomFont" @cyclebackgrounds="cycleBackgrounds" :reveal-counter="revealCounter"></nav-section>
		<name-page @changeview="changeView"></name-page>
		<font-selection-page @changeview="changeView" @changefont="changeFont" :selected-font="selectedFont"></font-selection-page>
		<storybook-page @changeview="changeView" @incrementcounter="incrementCounter" @changebackground="changeBackground" :selected-font="selectedFont"></storybook-page>
		<footer-section></footer-section>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import animationHandler from '../scripts/animation';

// Child components
import Font from '../components/font-selection-page.vue';
import Footer from '../components/footer-section.vue';
import Name from '../components/name-page.vue';
import Nav from '../components/nav-section.vue';
import Story from '../components/storybook-page.vue';

export default Vue.extend({
    name: 'app',
    data() {
        return {
            backgroundCollection: [
                'bulbs',
                'constellation',
                'mars',
                'mountains',
                'underwater',
                'unicorn',
                'wild',
            ],
            backgroundImage: 'bulbs',
            currentView: 'name',
            fonts: [
                'playfair',
                'code',
                'satisfy',
                'amatic',
                'voltaire',
            ],
            hasSelectedFont: true,
            revealCounter: 0,
            selectedFont: 'amatic',
            views: [
                'name',
                'font_selection',
                'storybook',
            ],
        }
    },
    beforeCreate() {
        console.log('Initializing experience, please wait...');
    },
    mounted() {
        console.log('Initialization complete. Please enjoy your stay.');
    },
    methods: {
        changeBackground: function(backgroundImage: string) {
            this.backgroundImage = backgroundImage;
        },
        changeFont: function(font: string) {
            this.selectedFont = font;
            this.hasSelectedFont = true;
        },
        changeView: function(event: Event) {
            const currentPageElement = document.getElementById(this.currentView);

            if (currentPageElement) {
                const currentViewIndex = this.views.findIndex((viewName) => this.currentView === viewName);
                const nextPageElement = document.getElementById(`${this.views[currentViewIndex + 1]}`);

                if (nextPageElement) {
                    // Fade out elements from the current view.
                    const currentPageElementsArray = Array.prototype.slice
                        .call(currentPageElement.querySelectorAll('[data-animate]'));

                    animationHandler(currentPageElementsArray, 300).then(() => {
                        // Bring in new page section.
                        this.currentView = this.views[currentViewIndex + 1];
                        currentPageElement.classList.add('hidden');
                        nextPageElement.classList.remove('hidden');

                        // Animate in the elements on the new page.
                        const nextPageElementsArray = Array.prototype.slice
                            .call(nextPageElement.querySelectorAll('[data-animate]'));

                        setTimeout(() => {
                            animationHandler(nextPageElementsArray, 200);
                        }, 200);
                    });
                } else {
                    console.warn('No next page element!');
                }
            }

            // $parentCache.animateCss('fadeOut', $chainElement, 'fadeInUp');
        },
        chooseRandomFont: function() {
            this.selectedFont = this.fonts[Math.floor(Math.random() * this.fonts.length)];
        },
        cycleBackgrounds: function() {
            const imageNumber = this.backgroundCollection.indexOf(this.backgroundImage);
            this.backgroundImage = this.backgroundCollection[imageNumber + 1];
        },
        incrementCounter: function() {
            this.revealCounter = this.revealCounter + 1;
        },
    },
    components: {
        'font-selection-page': Font,
        'footer-section': Footer,
        'name-page': Name,
        'nav-section': Nav,
        'storybook-page': Story,
    },
});
</script>

<style lang="scss">
@import '../styles/main.scss';
</style>
