 /* big slider */
 let slideIndex = 0;
 showSlides();
 
 function showSlides() {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 6000); // Change image every 2 seconds
 }
 
 /* big slider end */
 
/*tiny slider */
let slider = tns({
  container : ".my-slider",
  "slideBy" : "1",
  "speed": 100,
  "nav" : false,
  autoplay : true,
  controls: false,
  autoplayButtonOutput:false,
   responsive: {
      1200:{
          items: 5,
          gutter: 40  
      },
      1013:{
          items: 4,
          gutter: 20  
      },
      680:{
          items: 3,
          gutter: 20  
      },
     
   }

})
/* tiny slider*/

   
 /*slide review */
 let reviewSlideIndex = 0;
 reviewSlides();
 function reviewSlides() {
  let i;
  let rSlides =document.getElementsByClassName("slide-review");
  let reviewDots = document.getElementsByClassName("r-dot");
  for (i = 0; i <  rSlides.length; i++){
    rSlides[i].style.display ="none";
  }
  reviewSlideIndex++;
  if(reviewSlideIndex > rSlides.length){
    reviewSlideIndex = 1;
  }
  for( i = 0; i < reviewDots.length; i++){
    reviewDots[i].className = reviewDots[i].className.replace("active", " ");
  }
  rSlides[reviewSlideIndex-1].style.display= "block";
  reviewDots[reviewSlideIndex-1].className += " active";
  setTimeout(reviewSlides, 2000);
 }

 /* slide review end */
 /* Range slider */
 $('#rangeval').mdbRange({
    
});
/* range slider end */

   
