import Vue from 'vue';

// Add a function to allow jQuery to work with animate.css
// $.fn.extend({
//     animateCss: function (animationName, chainElement, chainAnimation) {

//         const hideAfterwards = animationName === 'fadeOut' ? true : false;
//         const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//         // $(this).removeClass('hidden').addClass('animated ' + animationName).one(animationEnd, function() {
//             // $(this).removeClass('animated ' + animationName);

//             if(hideAfterwards) {
//                 // $(this).addClass('hidden');
//             }

//             if(chainElement && chainAnimation) {
//                 // Recursively call animate again to chain animations
//                 chainElement.animateCss(chainAnimation);
//             }
//         });

//         return this;
//     }
// });

const data = {
    backgroundCollection: [
        'bulbs',
        'constellation',
        'mac',
        'mars',
        'mountains',
        'satellites',
        'underwater',
        'unicorn',
        'wild',
    ],
    backgroundImage: 'bulbs',
    currentView: 'name',
    fonts: [
        'playfair',
        'code',
        'josefin',
        'amatic',
    ],
    hasSelectedFont: false,
    revealCounter: 0,
    selectedFont: '',
    views: [
        'name',
        'font_selection',
        'storybook',
    ],
};

Vue.component('name-page', {
    methods: {
        changeView() {
            this.$emit('changeview');
        },
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
        revealText: function(numberString: string, event: Event) {
            // Functionality to reveal next segment of text
            const elementToReveal = document.querySelector(`[data-segment="${numberString}"]`);
            (event.target as HTMLElement).classList.add('exhausted');

            if (elementToReveal) {
                elementToReveal.classList.remove('hidden');

                setTimeout(function() {
                    elementToReveal.classList.add('revealed');
                }, 500);

                this.$emit('incrementcounter');
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
                    this.currentView = this.views[currentViewIndex + 1];
                    nextPageElement.classList.remove('hidden');
                    currentPageElement.classList.add('hidden');
                } else {
                    console.warn('no next page element');
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
            const value = this.revealCounter;

            switch (value) {
                case 3:
                    // $('.article').addClass('three');
                    // $('.trophy').filter(':not(".polished")').first().addClass('polished');
                    break;

                case 5:
                    // $('.article').addClass('five');
                    // $('.trophy').filter(':not(".polished")').first().addClass('polished');
                    break;

                case 10:
                    // $('.article').addClass('ten');
                    // $('.trophy').filter(':not(".polished")').first().addClass('polished');
                    break;

                default:
                    break;
            }
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

    setTimeout(function() {
        // TODO: Make this selector more specific
        const h1Element = document.querySelector('h1');

        if (h1Element) {
            h1Element.classList.add('fadeIn');
        }
    }, 2000);
});
