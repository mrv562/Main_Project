const img = document.querySelectorAll(".header-slider ul img");
const backBtn = document.querySelector('.control-back');
const frontBtn = document.querySelector('.control-front');

let n = 0;

function changeSlide(){
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  }
  img[n].style.display = 'block';
}

changeSlide();

backBtn.addEventListener('click',(e) =>{
  if(n > 0){
    n--;
  }
  else{
    n = img.length -1;
  }
  changeSlide();
})

frontBtn.addEventListener('click',(e) =>{
  if(n < img.length - 1){
    n++;
  }
  else{
    n = 0;
  }
  changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
  item.addEventListener('wheel' ,(evt) =>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  })
}

