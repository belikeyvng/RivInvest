let currentSlide;

let slideBtns = document.querySelectorAll(".carousel-pic");
let slideImage = document.getElementById("slideshowImage");
let slideCaption = document.querySelector("p.slide-caption");


function autoSlide(param) {
  if(param == 0) {
    slideImage.src = " ./assets/images/dockside.webp";
    slideCaption.innerHTML = "A Sustainable <br> Future, Flowing from Our Rivers";
    slideBtns[0].src = "./assets/images/becon b.png";
  }
  else
  if(param == 1) {
    slideImage.src =  "./assets/images/irri.webp";
    slideCaption.innerHTML = "Cultivating Our Land, Nurturing Our People";
    slideBtns[1].src = "./assets/images/farm b.png";
  }
  else 
  if(param == 2) {
    slideImage.src =  "./assets/images/bridge 2.webp";
    slideCaption.innerHTML = "Building for the Future, Infrastructure that Drives Prosperity";
    slideBtns[2].src = "./assets/images/inf b.png";
  }
  else 
  if(param == 3) {
    slideImage.src =  "./assets/images/dev.webp";
    slideCaption.innerHTML = "A Digital Future for Rivers State";slideBtns[3].src = "./assets/images/ict b.png";
  }
  else 
  if(param == 4) {
    slideImage.src =  " ./assets/images/medic.webp";
    slideCaption.innerHTML = "Quality Healthcare, Accessible to All";
    slideBtns[4].src = "./assets/images/medic b.png";
  }
  else 
  if(param == 5) {
    slideImage.src =  " ./assets/images/stud.webp";
    slideCaption.innerHTML = "A More Equitable Future Through Education";
    slideBtns[5].src = "./assets/images/stud b.png";
  }
  else 
  if(param == 6) {
    slideImage.src =  " ./assets/images/vr.webp";
    slideCaption.innerHTML = "Innovating the Future Through Drive for Creativity";
    slideBtns[6].src = "./assets/images/CE b.png";
  }
    
  removePrev();
  
}
  
function removePrev() {
  let prevIndex = currentAuto - 1;
  if(prevIndex == 0) {
    slideBtns[0].src = "./assets/images/becon w.png"
  }
  else
  if(prevIndex == 1) {
    slideBtns[1].src = "./assets/images/farm w.png"
  }
  else
  if(prevIndex == 2) {
    slideBtns[2].src = "./assets/images/inf w.png"
  }
  else
  if(prevIndex == 3) {
    slideBtns[3].src = "./assets/images/ict w.png"
  }
  else
  if(prevIndex == 4) {
    slideBtns[4].src = "./assets/images/medic w.png"
  }
  else
  if(prevIndex == 5) {
    slideBtns[5].src = "./assets/images/stud w.png"
  }
  else
  if(prevIndex < 0 ) {
    slideBtns[6].src = "./assets/images/CE w.png"
  }
  
}

let currentAuto = 0;

  setInterval( ()=>{
    if(currentAuto == 6) {
      currentAuto = 0

      autoSlide(0)
      return;
    } 

      currentAuto += 1;

      autoSlide(currentAuto)
  }, 5000);