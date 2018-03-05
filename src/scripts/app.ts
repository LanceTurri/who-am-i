import Vue from 'vue';


// Helper functions
// =============================================================================
const clearAnimationClasses = (element: HTMLElement) => {
    element.classList.remove('fade-out', 'fade-in');
};

// TODO: Rewrite with a promise architecture.
const fadeElements = (animationElementsArray: HTMLElement[], delayTime: number, resolve: () => void) => {
    if (animationElementsArray.length > 0) {
        const elementToAnimate = animationElementsArray.shift() as HTMLElement;

        if (elementToAnimate.classList.contains('fade-in')) {
            console.log('fading out!');
            elementToAnimate.classList.add('fade-out');

            // HACK: We need to wait for the animation to complete before 'resetting' the
            // animation classes on it. Change this to an on animation end event.
            setTimeout(() => {
                clearAnimationClasses(elementToAnimate);
            }, 500);
        } else {
            console.log('fading in!');
            elementToAnimate.classList.add('fade-in');
        }

        if (elementToAnimate.dataset.animateAfter && elementToAnimate.dataset.animateAfter) {
            setTimeout(() => {
                elementToAnimate.classList.add(elementToAnimate.dataset.animateAfter as string);
            }, 500);
        }

        // Recursively call the function, passing it the augmented array.
        setTimeout(() => {
            fadeElements(animationElementsArray, delayTime, resolve);
        }, delayTime);
    } else {
        // While perfect is the enemy of done, this is some pretty hacky code.
        // TODO: come refactor this function to not be so tenuous.
        setTimeout(() => {
            resolve();
        }, 200);
    }
};

const animationHandler = (animationElementsArray: HTMLElement[], delayTime: number = 300) => {
    return new Promise((resolve, reject) => {
        fadeElements(animationElementsArray, delayTime, resolve);
    });
};


// Initial data object for page viewmodel
// =============================================================================
const data = {
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
    fonts: [
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


// Page subcomponents
// =============================================================================
Vue.component('name-page', {
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
    },
    template: '#name_page_template',
});

Vue.component('font-selection-page', {
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
    template: '#font_selection_page_template',
});

Vue.component('storybook-page', {
    methods: {
        changeView() {
            this.$emit('changeview');
        },
        revealText: function(numberString: string, event: Event, backgroundImage?: string) {
            // Functionality to reveal next segment of text
            const elementToReveal = document.querySelector(`[data-segment="${numberString}"]`);
            (event.target as HTMLElement).classList.add('exhausted');

            if (elementToReveal) {
                elementToReveal.classList.remove('hidden');

                setTimeout(function() {
                    elementToReveal.classList.add('revealed');
                }, 500);

                this.$emit('incrementcounter');

                if (backgroundImage) {
                    this.$emit('changebackground', backgroundImage);
                }
            } else {
                console.warn('no element to reveal');
            }
        },
    },
    props: [
        'selectedFont',
    ],
    template: '#storybook_page_template',
});

Vue.component('nav-section', {
    methods: {
        chooseRandomFont: function() {
            this.$emit('chooserandomFont');
        },
        cycleBackgrounds: function() {
            this.$emit('cyclebackgrounds');
        },
    },
    props: [
        'revealCounter',
    ],
    template: '#nav_section_template',
});

Vue.component('footer-section', {
    methods: {
        changeView() {
            this.$emit('changeView');
        },
    },
    template: '#footer_section_template',
});


// Main page viewmodel
// =============================================================================
const portfolioViewModel = new Vue({
    data: data,
    el: '#vue-app',
    beforeCreate() {
        console.log('Initializing experience, please wait...');
    },
    mounted() {
        console.log('Initialization complete. Please enjoy your stay.');
    },
    methods: {
        changeBackground: function(backgroundImage: string) {
            this.backgroundImage = backgroundImage;
        },
        changeFont: function(font: string) {
            this.selectedFont = font;
            this.hasSelectedFont = true;
        },
        changeView: function(event: Event) {
            const currentPageElement = document.getElementById(this.currentView);

            if (currentPageElement) {
                const currentViewIndex = this.views.findIndex((viewName) => this.currentView === viewName);
                const nextPageElement = document.getElementById(`${this.views[currentViewIndex + 1]}`);

                if (nextPageElement) {
                    // Fade out elements from the current view.
                    const currentPageElementsArray = Array.prototype.slice
                        .call(currentPageElement.querySelectorAll('[data-animate]'));

                    animationHandler(currentPageElementsArray, 300).then(() => {
                        // Bring in new page section.
                        this.currentView = this.views[currentViewIndex + 1];
                        currentPageElement.classList.add('hidden');
                        nextPageElement.classList.remove('hidden');

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

            // $parentCache.animateCss('fadeOut', $chainElement, 'fadeInUp');
        },
        chooseRandomFont: function() {
            this.selectedFont = this.fonts[Math.floor(Math.random() * this.fonts.length)];
        },
        cycleBackgrounds: function() {
            const imageNumber = this.backgroundCollection.indexOf(this.backgroundImage);
            this.backgroundImage = this.backgroundCollection[imageNumber + 1];
        },
        incrementCounter: function() {
            this.revealCounter = this.revealCounter + 1;
        },
    },
});


// Page startup listeners
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.keyCode === 192) {
            const footerElement: HTMLDivElement | null = document.querySelector('.footer-menu');

            if (footerElement) {
                footerElement.classList.add('revealed');
            }
        }
    });
});
