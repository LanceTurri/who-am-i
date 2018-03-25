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

.footer-menu {
    background: #f5f5f5;
    border-top: 1px solid $grey-dark;
    bottom: 0;
    color: $grey-dark;
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

