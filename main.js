var swiper = new Swiper(".custom-swipe", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
	el: '.swiper-pagination',
	type: 'fraction',
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },
});







/**
 * Multiple Swiper Slides
 * with same configuration and multiple navigation buttons
 *
 * @require Swiper v4.X
 * @author Pedro Britto
 */
// const multipleSwiperSlides = function() {
// 	let sliderMain = document.querySelectorAll('.swiper-container.js-slider--main')
// 	let sliderNav  = document.querySelectorAll('.swiper-container.js-slider--nav')

//   // Arrays to hold swiper instances
// 	let mainArray  = [];
// 	let navArray   = [];

// 	// Slider Main
// 	sliderMain.forEach(function(element, i) {
// 		// Push swiper instance to array
// 		mainArray.push(
// 			new Swiper(element, {
// 				loop: true,
// 				loopedSlides: 3,
// 			})
// 		);
// 	});

// 	// Slider Nav
// 	sliderNav.forEach(function(element, i) {
// 		var self = sliderNav;
// 		// Push swiper instance to array
// 		navArray.push(
// 			new Swiper(element, {
// 				slidesPerView: 3,
// 				loop: true,
// 				loopedSlides: 3,
// 				slideToClickedSlide: true,
//         spaceBetween: 5,
//         navigation: {
//           nextEl: self[i].querySelector('.swiper-button-next'),
//           prevEl: self[i].querySelector('.swiper-button-prev')
//         }
// 			})
// 		);
// 	});

// 	const checkOnPage = function() {
// 		if (sliderMain.length > 0 && sliderNav.length > 0) {
// 			let numberOfSlides = mainArray.length || navArray.length || 0;
	
// 			if (mainArray.length !== navArray.length) {
// 				console.warn('multipleSwiperSlides: Number of main slides and nav slides is different. Expect incorrect behaviour.');
// 			}
	
// 			for (let i = 0; i < numberOfSlides ; i++ ) {
// 				mainArray[i].controller.control = navArray[i];
// 				navArray[i].controller.control  = mainArray[i];
// 			}
	
// 			console.log('multipleSwiperSlides: Things should be working fine. B)');
// 		}
// 	}

// 	checkOnPage();
// }

// multipleSwiperSlides();




// Gallery

$(document).ready(function(){
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
	  mainClass: 'mfp-with-zoom', 
	  gallery:{
				enabled:true
			},
	
	  zoom: {
		enabled: true, 
	
		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function
	
		opener: function(openerElement) {
	
		  return openerElement.is('img') ? openerElement : openerElement.find('img');
	  }
	}
	
	});
	
	});




