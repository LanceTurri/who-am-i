import Vue from 'vue';
import Vuex from 'vuex';

import { findNextInArray } from '@/helpers/helpers';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        revealCounter: 0,

        // Available Collections
        backgroundCollection: [
            'bulbs',
            'constellation',
            'mars',
            'mountains',
            'underwater',
            'unicorn',
            'wild',
        ],
        fontCollection: [
            'playfair',
            'code',
            'satisfy',
            'amatic',
            'voltaire',
        ],

        // Current selections
        currentBackground: 'bulbs',
        currentFont: 'amatic',
    },
    mutations: {
        incrementCounter(state) {
            state.revealCounter++;
        },
        changeBackground(state, currentBackground: string) {
            state.currentBackground = currentBackground;
        },
        changeFont(state, font: string) {
            state.currentFont = font;
        },
        cycleBackgrounds(state) {
            const nextImageIndex = findNextInArray(state.currentBackground, state.backgroundCollection);
            state.currentBackground = state.backgroundCollection[nextImageIndex];
        },
        cycleFonts(state) {
            const nextFontIndex = findNextInArray(state.currentFont, state.fontCollection);
            state.currentFont = state.fontCollection[nextFontIndex];
        },
    },
    actions: {

    },
});
