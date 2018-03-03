import Vue from 'vue';

// Add a function to allow jQuery to work with animate.css
// $.fn.extend({
//     animateCss: function (animationName, chainElement, chainAnimation) {

//         const hideAfterwards = animationName === 'fadeOut' ? true : false;
//         const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//         $(this).removeClass('hidden').addClass('animated ' + animationName).one(animationEnd, function() {
//             $(this).removeClass('animated ' + animationName);

//             if(hideAfterwards) {
//                 $(this).addClass('hidden');
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
    fonts: [
        'playfair',
        'code',
        'josefin',
        'amatic',
    ],
    hasSelectedFont: false,
    revealCounter: 0,
    selectedFont: '',
};

const portfolioViewModel = new Vue({
    data: data,
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


            $('.selected').removeClass('selected');
            $(event.currentTarget).addClass('selected');

        },
        changeView: function() {
            const $parentCache = $(event.currentTarget).parent('section');
            const $chainElement = $parentCache.next('section');
            $parentCache.animateCss('fadeOut', $chainElement, 'fadeInUp');
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
                    $('.article').addClass('three');
                    $('.trophy').filter(':not(".polished")').first().addClass('polished');
                    break;

                case 5:
                    $('.article').addClass('five');
                    $('.trophy').filter(':not(".polished")').first().addClass('polished');
                    break;

                case 10:
                    $('.article').addClass('ten');
                    $('.trophy').filter(':not(".polished")').first().addClass('polished');
                    break;

                default:
                    break;
            }
        },
        revealText: function(numberString, itemToReveal) {
            // Functionality to reveal next segment of text
            const $sectionToReveal = $('[data-segment="' + numberString + '"]');
            $(event.currentTarget).addClass('exhausted');
            $sectionToReveal.removeClass('hidden');

            setTimeout(function() {
                $sectionToReveal.addClass('revealed');
            }, 500);

            this.incrementCounter();

            // If there is also an item to reveal (like a unicorn) go ahead
            if (itemToReveal) {
                $('.' + itemToReveal).removeClass('hidden');
            }
        },
    },
});

const namePageViewModel = null;


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
