<template>
    <section class="page-wrapper storybook" id="storybook" :class="[selectedFont, currentView === 'storybook' ? '' : 'hidden']">
        <div class="storybook__container" data-animate="fade-in-right" data-simplebar>
            Hello, my name is <em class="underline" @click="revealText('1', $event)">Lance
            <span class="hidden highlight" data-segment="1">Steven</span>
            Turri</em> and I am <em @click="revealText('2', $event)">a</em>
            <span class="hidden highlight" data-segment="2">super hero</span>
            <em @click="revealText('3', $event)">front end architect</em>.
    
            <span class="hidden highlight" data-segment="3">Some of my interests include
                <em @click="revealText('4', $event)">reading</em>
                <span class="hidden highlight" data-segment="4"> (especially futuristic fiction about space)</span>, watching rugby, and writing <em @click="revealText('5', $event)">scalable css</em>.
    
                <p class="hidden highlight" data-segment="5">
                    My greatest satisfaction comes at having a design in front of me and finding the best, most efficient way of making it come to
                    <em @click="revealText('6', $event)">life</em>
                    <span class="hidden highlight" data-segment="6"> because at heart I am a
                        <em @click="revealText('7', $event)">problem</em> solver.
                        <span class="hidden highlight" data-segment="7">Front end development is like a constant puzzle that changes daily and I enjoy solving it. Whether it's a new way of doing something, or just micro-optimizing a current process, it is certainly my <em @click="revealText('8', $event)">passion</em>.</span>
                    </span>
                    That is what I love most about front end work; I can bring my imagination and creativity alongside my logical and analytical perspective. 
                </p>

                <p class="hidden highlight" data-segment="8">Whew! That was a long introduction. Okay <em @click="revealText('10', $event)">what else</em> do you want to know?</p>
            </span>

            <div class="hidden highlight" data-segment="10">
                <em @click="revealText('9', $event)">Philosophy on CSS</em>
                <div class="hidden highlight mb-25" data-segment="9">My HTML and CSS writing philosophy (if you can call it that) is very simple, write as 
                    <em @click="revealText('11', $event)">little as possible</em>.
                    
                    <span class="hidden highlight" data-segment="11">
                        Of course I subscribe to the DRY principle and the idea of modular CSS, but how my code actually turns out is always dependant on the project and what its 
                        <em @click="revealText('12', $event)">needs</em> are.
                    </span> 
                    <span class="hidden highlight" data-segment="12">
                        The problem comes in that scalable CSS takes different forms depending on what you are trying to do and what scales for the 
                        <em @click="revealText('13', $event)">company</em> 
                        and product you are a part of.
                    </span> 
                    <span class="hidden highlight" data-segment="13">
                        For instance, writing CSS when you are the only front end developer is quite different than having a team of 
                        <em @click="revealText('14', $event)">font loving</em>
                        <span class="hidden highlight" data-segment="14">(My favorite is Avenir)</span>, <em @click="revealText('29', $event)">pixel perfect</em> counterparts.
                    </span>

                    <p class="hidden highlight" data-segment="29">
                        At the end of the day, I want to write as clear and 
                        <em @click="revealText('15', $event)">concise</em> 
                        front end code as possible. 
                        <span class="hidden highlight" data-segment="15">
                            Someone reading what I've worked on should never have to ask me how it works, or why I 
                            <em @click="revealText('16', $event)">did it that way</em>
                            <span class="hidden highlight" data-segment="16"> (that's what comments are for!)</span>.
                        </span>
                    </p>
                </div>

                <div class="mt-25">
                    <em @click="revealText('17', $event)">Your Favorite movies</em>

                    <div class="hidden highlight" data-segment="17">
                        Hmm... now that you ask, I think I'll have to go with my top five (in no particular order).

                        <ul>
                            <li>Skyfall</li>
                            <li>The Princess Bride</li>
                            <li>Blade Runner</li>
                            <li>The Witch</li>
                            <li>Howl's Moving Castle</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <em @click="revealText('18', $event)">Books currently reading</em>

                    <div class="hidden highlight" data-segment="18">
                        I am certainly more of a Sci-Fi and Fantasy fan but there are a few in here that would appeal to other genres.

                        <ul>
                            <li>The Expanse (On book 5 of 9)</li>
                            <li>Mistborn</li>
                            <li>Millennium trilogy (The girl with the dragon tattoo)</li>
                            <li>Moon is a harsh mistress</li>
                            <li>Serena</li>
                        </ul>
                    </div>
                </div>

                <em @click="revealText('19', $event)">Your most complex problem</em>

                <div class="hidden highlight" data-segment="19">
                    This is going to sound like a bit of a copout, but the most complex problem I've faced is writing 
                    <em @click="revealText('20', $event)">scalable CSS</em>. 
                    <span class="hidden highlight" data-segment="20">
                        My definition of this is creating a structure that is both welcoming for developers and able to scale 
                        <em @click="revealText('21', $event)">gracefully</em> 
                        with new modules, ideas, features, and designs.
                    </span> 
                    <span class="hidden highlight" data-segment="21">
                        And therein lies the challenge, to create something that is brilliantly concise and can 
                        <em @click="revealText('22', $event)">grow at a whim</em> 
                        into any number of things.
                    </span> 
                    <span class="hidden highlight" data-segment="22">
                        The way that I do that is by thinking about the 
                        <em @click="revealText('23', $event)">individual parts</em> 
                        instead of the whole when I am writing code.
                    </span>

                    <p class="hidden highlight" data-segment="23">
                        As a kid I used to build with Lego's every night. I would stay up till 
                        <em @click="revealText('24', $event)">three in the morning</em>
                        <span class="hidden highlight" data-segment="24">
                            (back when cartoon network went to static after Space Ghost)
                        </span>, building everything I possibly could. When I would do this, I never thought I need a spaceship, I would say I need a 2 x 4 that is red to 
                        <em @click="revealText('25', $event)">build this section</em>. 
                        <span class="hidden highlight" data-segment="25">
                            That's what scalable CSS should be: reusable, dynamic, agnostic blocks that can be combined to build 
                            <em @click="revealText('26', $event)">anything</em>.
                        </span> 
                        <span class="hidden highlight" data-segment="26">
                            And when you just have to have that trapdoor so that the evil wizard can be 
                            <em @click="revealText('27', $event)">defeated</em>, you can create a new class.
                        </span>
                    </p>

                    <p class="hidden highlight" data-segment="27">You made it! Congratulations! If you'd like to know more about me, check out the links in the section at the top.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'storybook-page',
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
        'currentView',
    ],
});
</script>

<style lang="scss" scoped>
// Article styling to make this look like a magazine.
// =============================================================================
.storybook {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: 675px;
    text-align: justify;
    width: 80%;

    .storybook__container {
        max-height: 100%;
        overflow: auto;
    }

    em {
        cursor: pointer;
        font-style: normal;
        opacity: 1;
        text-decoration: underline;
    }

    .exhausted {
        cursor: default;
        font-style: italic;
        text-decoration: none;
    }

    .highlight {
        opacity: 0.8;
        transition: background 0.4s linear, color 0.4s linear, opacity 0.2s linear;

        &.revealed {
            background: transparent;
            opacity: 1;
        }
    }
}
</style>
