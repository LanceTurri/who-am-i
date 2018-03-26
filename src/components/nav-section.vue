<template>
  <nav class="trophy-case">
        <a class="trophy-case__item ion-social-github-outline" :class="[revealCounter >= 0 ? 'trophy-case__item--polished' : '']" href="https://github.com/LanceTurri" target="_blank" rel="noreferrer" title="Lance Turri's Github"></a>
        <a class="trophy-case__item ion-social-linkedin-outline" :class="[revealCounter >= 3 ? 'trophy-case__item--polished' : '']" href="https://www.linkedin.com/in/lance-turri-37b39030" target="_blank" rel="noreferrer" title="Lance Turri's LinkedIn Profile"></a>
        <a class="trophy-case__item ion-social-codepen-outline" :class="[revealCounter >= 5 ? 'trophy-case__item--polished' : '']" href="https://codepen.io/LanceTurri" target="_blank" rel="noreferrer" title="Lance Turri's Codepen"></a>
        <span class="trophy-case__item ion-images" :class="[revealCounter >= 10 ? 'trophy-case__item--polished' : '']" @click="cycleBackgrounds" role="button" title="Cycle through background images"></span>
        <span class="trophy-case__item ion-ios-refresh-empty" :class="[revealCounter >= 15 ? 'trophy-case__item--polished' : '']" @click="cycleFonts" role="button" title="Cycle through available fonts"></span>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'nav-section',
    methods: {
        cycleFonts: function() {
            this.$emit('cyclefonts');
        },
        cycleBackgrounds: function() {
            this.$emit('cyclebackgrounds');
        },
    },
    props: [
        'revealCounter',
    ],
});
</script>

<style lang="scss" scoped>
// Top nav or the trophy case section.
// =============================================================================
.trophy-case {
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: 0.5;
    padding-bottom: 15px;
    position: fixed;
    top: 0;
    transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
    // MAGIC NUMBER: 20px is 15px transparent space beneath and a 5px space for
    // the colored ribbon to show through at the top of the page.
    transform: translateY(calc(-100% + 25px));
    width: 100%;

    &:hover {
        opacity: 1;
        transform: translateY(0);
    }
}

.trophy-case__item {
    display: none;
    justify-content: center;
    max-width: 0;
    opacity: 0.9;
    overflow: hidden;
    padding: 15px;
    text-decoration: none;
    transition: all 0.5s ease-out;
    width: 10%;

    &--polished {
        cursor: pointer;
        display: flex;
        max-width: 100px;

        &:hover {
            opacity: 1;
        }
    }

    &::before {
        font-size: 32px;
    }
}
</style>
