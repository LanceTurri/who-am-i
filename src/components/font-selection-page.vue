<template>
    <section class="page-wrapper font-selection flex--col hidden" id="font_selection">
        <p class="font-selection__intro" data-animate="fade-in-right">Choose a font</p>
        <h2 class="font-selection__item playfair" @click="changeFont('playfair')" :data-active="[selectedFont === 'playfair' ? 'true' : 'false']" data-animate="fade-in-right">Hello, my name is Lance Turri and I am a front end architect.</h2>
        <h2 class="font-selection__item code" @click="changeFont('code')" :data-active="[selectedFont === 'code' ? 'true' : 'false']" data-animate="fade-in-right">Hello, my name is Lance Turri and I am a front end architect.</h2>
        <h2 class="font-selection__item amatic" @click="changeFont('amatic')" :data-active="[selectedFont === 'amatic' ? 'true' : 'false']" data-animate="fade-in-right">Hello, my name is Lance Turri and I am a front end architect.</h2>
        <h2 class="font-selection__item satisfy" @click="changeFont('satisfy')" :data-active="[selectedFont === 'satisfy' ? 'true' : 'false']" data-animate="fade-in-right">Hello, my name is Lance Turri and I am a front end architect.</h2>
        <h2 class="font-selection__item voltaire" @click="changeFont('voltaire')" :data-active="[selectedFont === 'voltaire' ? 'true' : 'false']" data-animate="fade-in-right">Hello, my name is Lance Turri and I am a front end architect.</h2>

        <button class="button--ghost ion-ios-arrow-thin-right" @click="changeView" data-animate="fade-in-right" data-animate-after="breathe"></button>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'font-selection-page',
    methods: {
        changeView() {
            this.$emit('changeview');
        },
        changeFont(fontName: string) {
            this.$emit('changefont', fontName);
        },
    },
    props: [
        'selectedFont',
    ],
});
</script>

<style lang="scss" scoped>
@import '../styles/includes/_variables.scss';

.font-selection__intro {
    border: 1px solid #f5f5f5;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1;
    margin-bottom: 30px;
    padding: 10px 15px;
    text-transform: uppercase;
}

.font-selection__item {
    background-color: #161616;
    color: #c5c5c5;
    cursor: pointer;
    padding: 0 20px;
    position: relative;
    transition: all 0.5s linear;

    &::before,
    &::after {
        border: 5px solid #f2c341;
        border-radius: 5px;
        content: '';
        display: block;
        height: 10px;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.3s all linear;
        width: 10px;
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }

    &:hover {
        color: #f5f5f5;
    }

    &[data-active='true'] {
        color: #f5f5f5;

        &::before,
        &::after {
            opacity: 1;
        }
    }
}
</style>
