console.log('Initializing, please wait...');

// Add a function to allow jQuery to work with animate.css
$.fn.extend({
    animateCss: function (animationName, chainElement, chainAnimation) {

    	var hideAfterwards = animationName === 'fadeOut' ? true : false;
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        $(this).removeClass('hidden').addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);

            if(hideAfterwards) {
	        	$(this).addClass('hidden');
	        }

            if(chainElement && chainAnimation) {
            	// Recursively call animate again to chain animations
            	chainElement.animateCss(chainAnimation);
            }
        });

        return this;
    }
});

var portfolioViewModel = function() {
	var self = this;

	self.revealCounter = ko.observable(0);
	self.fontChosen = ko.observable(false);
	self.whichFont = ko.observable();
	self.backgroundImage = ko.observable('');
	self.isThereThePopOfColor = ko.observable(false);
	self.areThereUnicorns = false;

	self.fonts = [
		'playfair',
		'code',
		'josefin',
		'amatic'
	];

	self.backgroundCollection = [
		'bulbs',
		'constellation',
		'mac',
		'mars',
		'mountains',
		'satellites',
		'underwater',
		'unicorn',
		'wild'
	];

	self.changeView = function(data, event) {
		var $parentCache = $(event.currentTarget).parent('section');
		var $chainElement = $parentCache.next('section');
		$parentCache.animateCss('fadeOut', $chainElement, 'fadeInUp');
	};

	self.revealText = function(numberString, itemToReveal, data, event) {
		// Functionality to reveal next segment of text
		var $sectionToReveal = $('[data-segment="' + numberString + '"]');
		$(event.currentTarget).addClass('exhausted');
		$sectionToReveal.removeClass('hidden');

		setTimeout(function() {
			$sectionToReveal.addClass('revealed');
		}, 500);

		self.revealCounter(self.revealCounter() + 1);

		// If there is also an item to reveal (like a unicorn) go ahead
		if(itemToReveal) {
			$('.' + itemToReveal).removeClass('hidden');
		}
	};

	self.revealCounter.subscribe(function(value) {
		switch(value) {
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
		}
	});

	self.randomFont = function() {
		self.whichFont(self.fonts[Math.floor(Math.random() * self.fonts.length)]);
	};

	self.changeFont = function(font, data, event) {
		self.whichFont(font);
		$('.selected').removeClass('selected');
		$(event.currentTarget).addClass('selected');

		if (self.fontChosen()) {
			toastr.success('Font ' + self.whichFont() + ' has been set.');
		}

		self.fontChosen(true);
	};

	self.cycleBackgrounds = function() {
		var imageNumber = self.backgroundCollection.indexOf(self.backgroundImage());
		self.backgroundImage(self.backgroundCollection[imageNumber + 1]);
		toastr.success('Background image ' + self.backgroundImage() + ' has been set.');
	};

	self.unicornJs = function() {
		if(!self.areThereUnicorns) {
			Expecto.patronum('.article', {
		        'duration': '1.0',
		        'bowFlow':'ltr',
		        'cursor':'pointer'
		    });
		    self.areThereUnicorns = true;
		    toastr.success('Unicorn.js enabled. Hover over some text to enjoy!');
		}
	};

	self.popOfColor = function() {
		self.isThereThePopOfColor(true);
	};

	self.bodyClasses = ko.pureComputed(function() {
		var accent = self.isThereThePopOfColor() ? 'accent ' : '';
		return  accent + self.backgroundImage();
	});

	// DEBUG - Testing for the behavior of the pureComputed
	self.bodyClasses.subscribe(function () {
	    console.log('I\'m awake!');
	}, this, "awake");

	self.bodyClasses.subscribe(function () {
	    console.log("I\m asleep!");
	}, this, "asleep");

};

ko.bindingHandlers.fadeVisible = {
    init: function(element, valueAccessor) {
        // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor();
        $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
    },
    update: function(element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        valueUnwrapped ? $(element).animateCss('fadeIn') : $(element).animateCss('fadeOut');
    }
};

ko.applyBindings(new portfolioViewModel());

$(function() {
	$('body').on('keydown', function(event) {
		if(event.ctrlKey && event.keyCode === 192) {
			$('.footer-menu').slideToggle();
		}
	});

	// The initial animation function.
	setTimeout(function() {
		console.log('Initialization complete. Please enjoy your stay.');
		$('h1').animateCss('fadeIn');
	}, 2000);

	setTimeout(function() {
		$('h1').animateCss('shake');
	}, 10000);

	setTimeout(function() {
		$('h1').animateCss('wobble');
	}, 15000);
});

//TODO: Add in tostr for developer notifications.
// TODO: Investigate loading libraries on click or lazy loading certain JS files.
// Help voice command that will open a modal with various commands