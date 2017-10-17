/*!
*  fork
 * pagepiling.js 1.5.4
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */

var prevTime = new Date().getTime();
// MouseWheelHandler()
function MouseWheelHandler(e) {
  var curTime = new Date().getTime();

  //IE是什么
  // e = e || window.event;
  
  //滚动值
  var value = e.wheelDelta || -e.deltaY || -e.detail;
  var delta = Math.max(-1, Math.min(1, value));

  var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
  var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

  //Limiting the array to 150 (lets not waste memory!)
  if(scrollings.length > 149){
      scrollings.shift();
  }

  //keeping record of the previous scrollings
  scrollings.push(Math.abs(value));

  //time difference between the last scroll and the current one
  var timeDiff = curTime-prevTime;
  prevTime = curTime;

  //haven't they scrolled in a while?
  //(enough to be consider a different scrolling action to scroll another section)
  if(timeDiff > 200){
      //emptying the array, we dont care about old scrollings for our averages
      scrollings = [];
  }

  if(!isMoving()){
      var activeSection = $('.section.active');

      var averageEnd = getAverage(scrollings, 10);
      var averageMiddle = getAverage(scrollings, 70);
      var isAccelerating = averageEnd >= averageMiddle;

      if(isAccelerating && isScrollingVertically){
        //scrolling down?
        if (delta < 0) {
            scrolling('down');

        //scrolling up?
        }else if(delta>0){
            scrolling('up');
        }
    }
    return false;
  }
}
function addMouseWheelHandler(){
  if (container.get(0).addEventListener) {
      container.get(0).addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
      container.get(0).addEventListener('wheel', MouseWheelHandler, false); //Firefox
  } else {
      console.log('Please Update Your Broweser')
  }
}
/**
* Determines if the transitions between sections still taking place.
* The variable `scrollDelay` adds a "save zone" for devices such as Apple laptops and Apple magic mouses
*/
function isMoving(){
  var timeNow = new Date().getTime();
  // Cancel scroll if currently animating or within quiet period
  if (timeNow - lastAnimation < scrollDelay + scrollingSpeed) {
      return true;
  }
  return false;
}
/**
* Gets the average of the last `number` elements of the given array.
*/
function getAverage(elements, number){
  var sum = 0;

  //taking `number` elements from the end to make the average, if there are not enought, 1
  var lastElements = elements.slice(Math.max(elements.length - number, 1));

  for(var i = 0; i < lastElements.length; i++){
      sum = sum + lastElements[i];
  }

  return Math.ceil(sum/number);
}
/**
* Determines the way of scrolling up or down:
* by 'automatically' scrolling a section or by using the default and normal scrolling.
*/
function scrolling(type){
  var check;
  var scrollSection;

  if(type == 'down'){
      check = 'bottom';
      scrollSection = moveSectionDown;
  }else{
      check = 'top';
      scrollSection = moveSectionUp;
  }
  scrollSection()
}
/**
* Moves section up
*/
function moveSectionUp() {
  var prev = $('.section.active').prev('.section');

  //looping to the bottom if there's no more sections above
  if (!prev.length && loopTop) {
      prev = $('.section').last();
  }

  if (prev.length) {
      scrollPage(prev);
  }
};

/**
* Moves section down
*/
function moveSectionDown() {
  var next = $('.section.active').next('.section');

  //looping to the top if there's no more sections below
  if(!next.length && loopBottom){
      next = $('.section').first();
  }

  if (next.length) {
      scrollPage(next);
  }
};

/**
* Scrolls the page to the given destination
*/
function scrollPage(destination, animated) {
  var v ={
      destination: destination,
      animated: animated,
      activeSection: $('.section.active'),
      // anchorLink: destination.data('anchor'),
      sectionIndex: destination.index('.section'),
      toMove: destination,
      yMovement: getYmovement(destination),
      leavingSection: $('.section.active').index('.section') + 1
  };

  //quiting when activeSection is the target element
  if(v.activeSection.is(destination)){ return; }

  if(typeof v.animated === 'undefined'){
      v.animated = true;
  }

  // if(typeof v.anchorLink !== 'undefined'){
  //     setURLHash(v.anchorLink, v.sectionIndex);
  // }

  v.destination.addClass('active').siblings().removeClass('active');

  v.sectionsToMove = getSectionsToMove(v);

  //scrolling down (moving sections up making them disappear)
  if (v.yMovement === 'down') {
      v.translate3d = getTranslate3d();
      v.scrolling = '-100%';

      if(!css3){
          v.sectionsToMove.each(function(index){
              if(index != v.activeSection.index('.section')){
                  $(this).css(getScrollProp(v.scrolling));
              }
          });
      }

      v.animateSection = v.activeSection;
  }

  //scrolling up (moving section down to the viewport)
  else {
      v.translate3d = 'translate3d(0px, 0px, 0px)';
      v.scrolling = '0';

      v.animateSection = destination;
  }

  // $.isFunction(options.onLeave) && options.onLeave.call(this, v.leavingSection, (v.sectionIndex + 1), v.yMovement);

  performMovement(v);

  // activateMenuElement(v.anchorLink);
  // activateNavDots(v.anchorLink, v.sectionIndex);
  // lastScrolledDestiny = v.anchorLink;

  var timeNow = new Date().getTime();
  lastAnimation = timeNow;
}
/**
* Retuns `up` or `down` depending on the scrolling movement to reach its destination
* from the current section.
*/
function getYmovement(destiny){
  var fromIndex = $('.section.active').index('.section');
  var toIndex = destiny.index('.section');

  if(fromIndex > toIndex){
      return 'up';
  }
  return 'down';
}
function getSectionsToMove(v){
  var sectionToMove;

  if(v.yMovement === 'down'){
      sectionToMove = $('.section').map(function(index){
          if (index < v.destination.index('.section')){
              return $(this);
          }
      });
  }else{
      sectionToMove = $('.section').map(function(index){
          if (index > v.destination.index('.section')){
              return $(this);
          }
      });
  }

  return sectionToMove;
}
/**
* Gets the translate3d property to apply when using css3:true depending on the `direction` option.
*/
function getTranslate3d(){
  if (direction !== 'vertical') {
        return 'translate3d(-100%, 0px, 0px)';
  }

  return 'translate3d(0px, -100%, 0px)';
}
/**
* Gets the property used to create the scrolling effect when using jQuery animations
* depending on the plugin direction option.
*/
function getScrollProp(propertyValue){
  if(direction === 'vertical'){
      return {'top': propertyValue};
  }
  return {'left': propertyValue};
}
/**
* Performs the movement (by CSS3 or by jQuery)
*/
function performMovement(v){
  if(css3){
      transformContainer(v.animateSection, v.translate3d, v.animated);

      v.sectionsToMove.each(function(){
          transformContainer($(this), v.translate3d, v.animated);
      });
      console.log(1)
      // setTimeout(function () {
      //     afterSectionLoads(v);
      // }, options.scrollingSpeed);
  }
  // else{
  //     v.scrollOptions = getScrollProp(v.scrolling);

  //     if(v.animated){
  //         v.animateSection.animate(
  //             v.scrollOptions,
  //         options.scrollingSpeed, options.easing, function () {
  //             readjustSections(v);
  //             afterSectionLoads(v);
  //         });
  //     }else{
  //         v.animateSection.css(getScrollProp(v.scrolling));
  //         setTimeout(function(){
  //             readjustSections(v);
  //             afterSectionLoads(v);
  //         },400);
  //     }
  // }
}
/**
 * Adds a css3 transform property to the container class with or without animation depending on the animated param.
 */
function transformContainer(element, translate3d, animated) {
  
  element.toggleClass('easing', animated);

  element.css(getTransforms(translate3d));
}
/**
* Cross browser transformations
*/
function getTransforms(translate3d) {
  return {
      '-webkit-transform': translate3d,
          '-moz-transform': translate3d,
          '-ms-transform': translate3d,
          'transform': translate3d
  };
}
$.extend($.easing,{ easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }});
var container = $('#main');
var scrollings = [];
var scrollingSpeed = 700;
var lastAnimation = 0;
var loopBottom = false;
var loopTop = false;
var direction = 'vertical';
var css3 = true;
var easing = 'swing';
//Defines the delay to take place before being able to scroll to the next section
//BE CAREFUL! Not recommened to change it under 400 for a good behavior in laptops and
//Apple devices (laptops, mouses...)
var scrollDelay = 600;

addMouseWheelHandler()

