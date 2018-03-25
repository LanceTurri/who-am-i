<template>
    <section class="page-wrapper" id="name">
        <h1 class="full-name pointed amatic" @click="changeView" data-animate="fade-in-right" data-animate-after="breathe">Lance Turri</h1>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import animationHandler from '../scripts/animation';

export default Vue.extend({
    name: 'name-page',
    methods: {
        changeView() {
            this.$emit('changeview');
        },
    },
    mounted() {
        // Initiate the animation.
        // TODO: Instead of an arbitrary setTimeout delay, poll for the element to exist.
        setTimeout(function() {
            const animationElementsArray = Array.prototype.slice
                .call(document.querySelectorAll('#name [data-animate]'));

            animationHandler(animationElementsArray, 300);
        }, 1000);
    }
});
</script>
