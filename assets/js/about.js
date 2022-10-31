
  
    let orgSlideIndex = 0;
organisationSlider();
function organisationSlider() {
  let i;
  let myOrgSlides = document.getElementsByClassName("orgSlide");
  let orgDots = document.getElementsByClassName("dot-org");
  for (i = 0; i < myOrgSlides.length; i++){
    myOrgSlides[i].style.display ="none";
  }
  orgSlideIndex++;
  if(orgSlideIndex >  myOrgSlides.length){
    orgSlideIndex = 1;
  }
  for(i = 0; i< orgDots.length; i++){
    orgDots[i].className = orgDots[i].className.replace(" active", " ");
  }
  myOrgSlides[orgSlideIndex -1].style.display = "block";  
  orgDots[orgSlideIndex -1].className += " active";
  setTimeout(organisationSlider, 2000); // Change image every 2 seconds
 

} 

