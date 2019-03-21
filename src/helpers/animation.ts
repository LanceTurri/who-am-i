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

export default animationHandler;
