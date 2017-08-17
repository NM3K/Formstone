/* global define */

(function(factory) {
	if (typeof define === "function" && define.amd) {
		define([
			"jquery",
			"./core",
		], factory);
	} else {
		factory(jQuery, Formstone);
	}
}(function($, Formstone) {

	"use strict";

	/**
	 * @method private
	 * @name resize
	 * @description Handles window resize
	 */

	function resize() {
		WindowHeight = $Window.height();

		Functions.iterate.call($Instances, resizeInstance);
	}

	/**
	 * @method private
	 * @name raf
	 * @description Handles request animation frame
	 */

	function raf() {
        ScrollTop = $Window.scrollTop();

		if (ScrollTop < 0) {
			ScrollTop = 0;
		}

		if (ScrollTop !== OldScrollTop) {
			renderRAF();

			OldScrollTop = ScrollTop;
		}
	}

	/**
	 * @method private
	 * @name cacheInstances
	 * @description Caches active instances
	 */

	function cacheInstances() {
		$Instances = $(Classes.base);

        resize();
	}

	/**
	 * @method private
	 * @name construct
	 * @description Builds instance.
	 * @param data [object] "Instance data"
	 */

	function construct(data) {
		var intersectParts = data.intersect.split("-");

		data.windowIntersect = intersectParts[0];
		data.elIntersect     = intersectParts[1];
		data.visible         = false;

		var $container = $( data.$el.data("checkpoint-container") );

		data.$target = ($container.length) ? $container : data.$el;

		data.$el.addClass(RawClasses.base);
	}

	/**
	 * @method private
	 * @name postConstruct
	 * @description Run post build.
	 * @param data [object] "Instance data"
	 */

	function postConstruct(data) {
        cacheInstances();
        resize();
	}

	/**
	 * @method private
	 * @name destruct
	 * @description Tears down instance.
	 * @param data [object] "Instance data"
	 */

	function destruct(data) {
		cacheInstances();
	}

	/**
	 * @method private
	 * @name renderRAF
	 * @description Updates DOM based on animation values
	 */

	function renderRAF() {
        Functions.iterate.call($Instances, checkInstance);
    }

	/**
	 * @method private
	 * @name resizeInstance
	 * @description Handle window resize event
	 * @param data [object] "Instance data"
	 */

	function resizeInstance(data) {
        switch (data.windowIntersect) {
            case "top":
                data.windowCheck = 0 - data.offset;
                break;
            case "middle":
                data.windowCheck = (WindowHeight / 2) - data.offset;
                break;
            case "bottom":
                data.windowCheck = WindowHeight - data.offset;
                break;
            default:
                break;
        }

		switch (data.elIntersect) {
            case "top":
                data.elCheck = data.$target[0].offsetTop;
                break;
            case "middle":
                data.elCheck = data.$target[0].offsetTop + (data.$target.outerHeight() / 2);
                break;
            case "bottom":
                data.elCheck = data.$target[0].offsetTop + data.$target.outerHeight();
                break;
            default:
                break;
        }

        checkInstance(data);
	}

	/**
	 * @method private
	 * @name checkInstance
	 * @description Handle window scroll event
	 * @param data [object] "Instance data"
	 */

	function checkInstance(data) {
		var check = (ScrollTop + data.windowCheck);

		if ( check >= data.elCheck ) {
            if (!data.active) {
                data.$el.trigger(Events.activate);
            }

            data.active = true;
			data.$el.addClass(RawClasses.active);
		} else {
			if (data.reverse) {
				if (data.active) {
					data.$el.trigger(Events.deactivate);
				}

				data.active = false;
				data.$el.removeClass(RawClasses.active);
			}
		}
	}

	/**
	 * @plugin
	 * @name Checkpoint
	 * @description A jQuery plugin for animating visible elements.
	 * @type widget
	 * @main checkpoint.js
	 * @dependency jQuery
	 * @dependency core.js
	 */

	var Plugin = Formstone.Plugin("checkpoint", {
			widget: true,

			/**
			 * @options
			 * @param intersect [string] <'bottom-top'> "Position of intersection"
			 * @param offset [int] <0> "Element offset for activating animation"
			 * @param reverse [boolean] <false> "Deactivate animation when scrolling back"
			 */

			defaults: {
				intersect    : 'bottom-top',
				offset       : 0,
				reverse      : false,
			},

			classes: [
				"active"
			],

			/**
			 * @events
			 * @event activate.checkpoint "Checkpoint activated"
			 * @event deactivate.checkpoint "Checkpoint deactivated"
			 */

			events: {
				activate      : "activate",
				deactivate    : "deactivate"
			},

			methods: {
				_construct    : construct,
				_postConstruct: postConstruct,
				_destruct     : destruct,
				_resize       : resize,
				_raf          : raf
			}
		}),

		// Localize References

		Namespace     = Plugin.namespace,
		Classes       = Plugin.classes,
		RawClasses    = Classes.raw,
		Events        = Plugin.events,
		Functions     = Plugin.functions,

		Window        = Formstone.window,
		$Window       = Formstone.$window,
		$Body,
		WindowHeight  = 0,
		ScrollTop     = 0,
		OldScrollTop  = 0,
		$Instances    = [];

})

);