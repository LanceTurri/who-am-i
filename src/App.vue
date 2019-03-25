<template>
    <div id="app" class="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->

        <router-view/>
    </div>
</template>

<style lang="scss">
// Global styling
// =============================================================================
* {
    box-sizing: border-box;

    &::before,
    &::after {
        box-sizing: inherit;
    }
}

html,
body {
    height: 100%;
}

body {
    font-family: 'Amatic SC', sans-serif;
    font-size: 24px;
    margin: 0;
}

.app {
    display: flex;
    height: 100%;
    line-height: 150%;
    justify-content: center;
    width: 100%;
}

.main-wrapper {
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-grow: 1;
    padding: 75px 0;
}

.page-wrapper {
    align-items: center;
    display: flex;
    flex: 1 0 100%;
    justify-content: center;
}

.button--ghost {
    background-color: transparent;
    border: 0;
    color: #cccccc;
    cursor: pointer;
    font-size: 28px;
    margin-top: 10px;
    padding: 10px 15px;
    text-decoration: underline;
    text-transform: uppercase;
    width: 100px;

    &::before {
        color: #cccccc;
    }

    &:hover,
    &:hover::before {
        color: darken(#f5f5f5, 10%);
    }
}

@import './styles/main.scss';
</style>
