<template>
    <main id="vue-app" class="main-wrapper" :class="currentBackground">
		<trophy-case></trophy-case>

		<opening
            @changeview="changeView"
            :current-view="currentView"></opening>

		<font-selection
            @changeview="changeView"
            :current-view="currentView"></font-selection>

		<storybook
            @changeview="changeView"
            :current-view="currentView"></storybook>

		<footer-section></footer-section>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import animationHandler from '@/helpers/animation';
import { findNextInArray } from '@/helpers/helpers';

// Child components
import FontSelection from '@/components/FontSelection.vue';
import FooterSection from '@/components/FooterSection.vue';
import Opening from '@/components/Opening.vue';
import TrophyCase from '@/components/TrophyCase.vue';
import Storybook from '@/components/Storybook.vue';

export default Vue.extend({
    name: 'app',
    data() {
        return {
            currentView: 'name',
            views: [
                'name',
                'font_selection',
                'storybook',
            ],
        };
    },
    computed: {
        currentBackground(): string {
            return this.$store.state.currentBackground;
        },
    },
    methods: {
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
    },
    components: {
        FontSelection,
        FooterSection,
        Opening,
        TrophyCase,
        Storybook,
    },
});
</script>
