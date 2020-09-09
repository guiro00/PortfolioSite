let images = document.querySelectorAll ('.small_img');
let modal = document.querySelector ('.modal');
let modalImag = document.querySelector('.#modalImag');
let btClose = document.querySelector('.#btClose');

for(let i -0; i<images.length; i++){
  image[i].addEventListener('click',function(){


    srcVal= images[i].getAttribute('src');
    modalImag.setAttribute('src', srcVal);
    modal.classList.toggle('modal_active');

  })
}

btClose.addEventListener('click', function(){
  modal.classList.toggle('modal_acitve');
});
