<template>
    <main id="vue-app" class="main-wrapper" :class="backgroundImage">
		<nav-section
            @cyclefonts="cycleFonts"
            @cyclebackgrounds="cycleBackgrounds"
            :reveal-counter="revealCounter"></nav-section>

		<name-page 
            @changeview="changeView"
            :current-view="currentView"></name-page>

		<font-selection-page
            @changeview="changeView"
            @changefont="changeFont"
            :selected-font="selectedFont"
            :current-view="currentView"></font-selection-page>

		<storybook-page 
            @changeview="changeView"
            @incrementcounter="incrementCounter"
            @changebackground="changeBackground"
            :selected-font="selectedFont"
            :current-view="currentView"></storybook-page>

		<footer-section></footer-section>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import animationHandler from '@/helpers/animation';
import { findNextInArray } from '@/helpers/helpers';

// Child components
import Font from '@/components/font-selection-page.vue';
import Footer from '@/components/footer-section.vue';
import Name from '@/components/name-page.vue';
import Nav from '@/components/nav-section.vue';
import Story from '@/components/storybook-page.vue';

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
            fontCollection: [
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
        };
    },
    beforeCreate() {
        console.log('Initializing experience, please wait...');
    },
    mounted() {
        console.log('Initialization complete. Please enjoy your stay.');
    },
    methods: {
        changeBackground(backgroundImage: string) {
            this.backgroundImage = backgroundImage;
        },
        changeFont(font: string) {
            this.selectedFont = font;
            this.hasSelectedFont = true;
        },
        changeView(event: Event) {
            const currentPageElement = document.getElementById(this.currentView);

            if (currentPageElement) {
                const currentViewIndex = this.views.findIndex((viewName) => this.currentView === viewName);
                const nextPageElement = document.getElementById(`${this.views[currentViewIndex + 1]}`);

                if (nextPageElement) {
                    // Fade out elements from the current view.
                    const currentPageElementsArray = Array.prototype.slice
                        .call(currentPageElement.querySelectorAll('[data-animate]'));

                    animationHandler(currentPageElementsArray, 200).then(() => {
                        // Bring in new page section.
                        this.currentView = this.views[currentViewIndex + 1];

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
        },
        cycleBackgrounds() {
            const nextImageIndex = findNextInArray(this.backgroundImage, this.backgroundCollection);
            this.backgroundImage = this.backgroundCollection[nextImageIndex];
        },
        cycleFonts() {
            const nextFontIndex = findNextInArray(this.selectedFont, this.fontCollection);
            this.selectedFont = this.fontCollection[nextFontIndex];
        },
        incrementCounter() {
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
