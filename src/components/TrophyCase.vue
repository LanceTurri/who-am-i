<template>
  <nav class="trophy-case">
        <a
            class="trophy-case__item ion-social-github-outline"
            :class="[revealCounter >= 0 ? 'trophy-case__item--polished' : '']"
            href="https://github.com/LanceTurri"
            target="_blank"
            rel="noreferrer"
            title="Lance Turri's Github">
                <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path class="st0" d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"/></g></svg>
            </a>

        <a
            class="trophy-case__item ion-social-linkedin-outline"
            :class="[revealCounter >= 0 ? 'trophy-case__item--polished' : '']"
            href="https://www.linkedin.com/in/lance-turri-37b39030"
            target="_blank"
            rel="noreferrer"
            title="Lance Turri's LinkedIn Profile">
                <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path class="st0" d="M182.8,384V212.9h-54.9V384H182.8L182.8,384z M157.4,187c18.3,0,29.7-13.1,29.7-29.5    c-0.3-16.7-11.4-29.5-29.4-29.5c-18,0-29.7,12.8-29.7,29.5c0,16.4,11.4,29.5,29,29.5H157.4L157.4,187z"/><path class="st0" d="M320.6,209c-29.1,0-41.6,16.4-49.6,27.8V213h-55v171h55v-97.4c0-5,0.4-10,1.9-13.5c4-10,13-20.3,28.2-20.3    c19.9,0,27.9,15.3,27.9,37.7V384h55v-99.9C384,232.8,356.8,209,320.6,209z"/></g><path d="M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9   C448,76.6,434.7,64,417.2,64z M414,416c-1.1,0-313.1,0-314.9,0s-3.1-1.4-3.1-3.1S96,99.1,96,98s1-2,2-2s315,0,316,0s2,1,2,2   c0,23.3,0,314.9,0,316C416,414.9,415.1,416,414,416z"/></g></svg>
            </a>

        <a
            class="trophy-case__item ion-social-codepen-outline"
            :class="[revealCounter >= 0 ? 'trophy-case__item--polished' : '']"
            href="https://codepen.io/LanceTurri"
            target="_blank"
            rel="noreferrer"
            title="Lance Turri's Codepen">
                <svg enable-background="new 0 0 50 50" id="Layer_1" version="1.1" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M40,20.2c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1  c0,0,0,0,0-0.1c0,0,0-0.1-0.1-0.1c0,0,0,0,0-0.1c0,0,0,0-0.1-0.1c0,0,0,0-0.1,0c0,0,0,0-0.1-0.1c0,0,0,0-0.1,0c0,0,0,0,0,0  l-13.7-9.1c-0.4-0.3-1-0.3-1.4,0l-13.7,9.1c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0.1c0,0,0,0-0.1,0c0,0,0,0-0.1,0.1c0,0,0,0,0,0.1  c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1  c0,0.1,0,0.1,0,0.2v9.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1  c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0.1,0.1c0,0,0,0,0.1,0.1c0,0,0,0,0.1,0.1c0,0,0,0,0.1,0  c0,0,0,0,0,0l13.7,9.1c0.2,0.1,0.5,0.2,0.7,0.2c0.2,0,0.5-0.1,0.7-0.2l13.7-9.1c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1  c0,0,0,0,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1  c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.2v-9.1C40,20.4,40,20.3,40,20.2C40,20.2,40,20.2,40,20.2z M25,28  l-4.6-3l4.6-3l4.6,3L25,28z M23.7,19.7l-5.6,3.7l-4.5-3l10.1-6.7L23.7,19.7z M15.8,25l-3.2,2.2v-4.3L15.8,25z M18.1,26.5l5.6,3.7v6  l-10.1-6.7L18.1,26.5z M26.3,30.3l5.6-3.7l4.5,3l-10.1,6.7V30.3z M34.2,25l3.2-2.2v4.3L34.2,25z M31.9,23.4l-5.6-3.7v-6l10.1,6.7  L31.9,23.4z" id="wtf"/><path d="M25,1C11.7,1,1,11.7,1,25s10.7,24,24,24s24-10.7,24-24S38.3,1,25,1z M25,44C14.5,44,6,35.5,6,25S14.5,6,25,6  s19,8.5,19,19S35.5,44,25,44z" /></svg>
            </a>

        <span
            class="trophy-case__item ion-images"
            :class="[revealCounter >= 0 ? 'trophy-case__item--polished' : '']"
            @click="cycleBackgrounds"
            role="button" 
            title="Cycle through background images">
                <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M457.6,140.2l-82.5-4l-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3L51.4,88.4c-11.8,1-20.3,10.5-19.4,21.7l21.2,235.8    c1,11.3,11.2,19.2,22.9,18.3l15-1.2l-2.4,45.8c-0.6,12.6,9.2,22.8,22.4,23.5L441.3,448c13.2,0.6,24.1-8.6,24.8-21.2L480,163.5    C480.6,151,470.7,140.8,457.6,140.2z M102.6,145.5l-7.1,134.8L78.1,305l-16-178c0-0.2,0-0.3,0-0.5s0-0.3,0-0.5    c0.5-5,4.3-9,9.5-9.4l261-21.4c5.2-0.4,9.7,3,10.5,7.9c0,0.2,0.3,0.2,0.3,0.4c0,0.1,0.3,0.2,0.3,0.4l2.7,30.8l-219-10.5    C114.2,123.8,103.2,133,102.6,145.5z M436.7,382.4l-46.7-55.3l-27.5-32.7c-2.4-2.9-6.3-5.3-10.6-5.5c-4.3-0.2-7.5,1.5-11.1,4.1    l-16.4,11.9c-3.5,2.1-6.2,3.5-9.9,3.3c-3.6-0.2-6.8-1.6-9.1-3.8c-0.8-0.8-2.3-2.2-3.5-3.4l-42.8-48.9c-3.1-3.9-8.2-6.4-13.8-6.7    c-5.7-0.3-11.2,2.1-14.8,5.6L129.4,359.8l-6.8,7.4l0.3-6.8l6.8-128.9l3.3-62.9c0-0.2,0-0.4,0-0.5c0-0.2,0-0.4,0-0.5    c1.4-5.4,6.2-9.3,11.9-9l204.2,9.8l28.7,1.4l58.3,2.8c5.8,0.3,10.3,4.7,10.4,10.2c0,0.2,0.3,0.3,0.3,0.5c0,0.2,0.3,0.3,0.3,0.5    L436.7,382.4z"/></g><path d="M373.2,262.3c19.4,0,35.2-15.8,35.2-35.2s-15.7-35.2-35.2-35.2c-19.4,0-35.2,15.7-35.2,35.2S353.7,262.3,373.2,262.3z"/></g></svg>
            </span>

        <span
            class="trophy-case__item ion-ios-refresh-empty"
            :class="[revealCounter >= 0 ? 'trophy-case__item--polished' : '']"
            @click="cycleFonts"
            role="button" 
            title="Cycle through available fonts">
                <svg class="cycle-fonts-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><path d="M10.667 277.333h298.667V320H10.667zM106.667 187.733h106.667l19.2 46.933h44.8L176 0h-32L42.667 234.667h44.8l19.2-46.934zM160 42.24l39.893 107.093h-79.787L160 42.24z"/></svg>
            </span>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'trophy-case',
    methods: {
        cycleFonts() {
            this.$store.commit('cycleFonts');
        },
        cycleBackgrounds() {
            this.$store.commit('cycleBackgrounds');
        },
    },
    computed: {
        revealCounter(): number {
            return this.$store.state.revealCounter;
        },
    },
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
    transition: all 300ms linear;
    width: 90px;

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

    &:first-child {
        border-radius: 0 0 0 5px;
    }

    &:last-child {
        border-radius: 0 0 5px 0;
    }
}

svg {
    height: 52px;
    transition: all 100ms linear;
    width: 40px;

    &.cycle-fonts-svg {
        width: 32px;
    }
}
</style>
