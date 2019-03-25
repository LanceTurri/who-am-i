<template>
    <footer class="footer-menu code hidden highlight">
        <small>(CRTL + ~) opens this menu</small>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'footer-section',
    methods: {
        changeView() {
            this.$emit('changeView');
        },
    },
});
</script>

<style lang="scss" scoped>
@import '../styles/includes/_variables.scss';

$footer-background: $wild-sand !default;
$footer-border: 1px solid $mine-shaft !default;
$footer-text-color: $mine-shaft !default;

.footer-menu {
    background: $footer-background;
    border-top: $footer-border;
    bottom: 0;
    color: $footer-text-color;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;

    small {
        display: block;
        font-size: 12px;
    }
}
</style>

