$(document).ready(function(){
	// hero slider
	$('#hero-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    items:1,
	    smartSpeed:1000,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
	    navText:['PREV','NEXT'],
	    responsive:{
	        0:{
	            
	          nav:false,  
	        },
	        768:{
	        	nav:true,
	        }
	    }
	})

	// project slider
	$('#project-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:2,
	    dots:false,
	    smartSpeed:1000,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
	    margin:24,
	    navText:['PREV','NEXT'],
	    responsive:{
	        0:{

	           items:1,
	           nav:false,
	           margin:0,  

	        },
	        768:{

	        	items:2,
	        },
	        1140: {
	        	
	        	items:2,
	        	center:true,
	        	dots:true,
	        }
	    }
	})

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:true,
	    items:1,
	    smartSpeed:8000,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,

	})

});

 