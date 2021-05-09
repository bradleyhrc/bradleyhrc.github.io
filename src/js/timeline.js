/* This JavaScript file activates the timeline on my website */

(function () {
  'use strict';

  // variables
  var items = document.querySelectorAll(".timeline li");

  // detect if element on screen
  // https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callback() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // Listen for events
  window.addEventListener("load", callback);
  window.addEventListener("resize", callback);
  window.addEventListener("scroll", callback);
})();
