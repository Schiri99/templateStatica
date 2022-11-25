// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
   
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },


//     // breakpoints: {
//     //     // when window width is >= 320px
//     //     320: {
//     //       slidesPerView: 2,
//     //       spaceBetween: 20
//     //     },
//     //     // when window width is >= 480px
//     //     480: {
//     //       slidesPerView: 3,
//     //       spaceBetween: 30
//     //     },
//     //     // when window width is >= 640px
//     //     640: {
//     //       slidesPerView: 4,
//     //       spaceBetween: 40
//     //     }
//     //   },
//     loop:true,
//     autoplay:{
//         delay:3000,
//         disableOnInteraction:false,
        

//     }

//   });
//   let advises=[
//     {name :'salvatore', quote:'bel sito ovviamente fatto da me'},
//     {name :'Giusepppe ', quote:'bel sito ovviamente fatto da me'},
//     {name :'mattia ', quote:'bel sito ovviamente fatto da me'},
//     {name :'Gianluca', quote:'bel sito ovviamente fatto da me'},
//     {name :'U mammut', quote:'bel sito ovviamente fatto da me'},
//     {name :'u trichechu', quote:'bel sito ovviamente fatto da me'},
//   ]
//   let swiperWrapper =document.querySelector('.swiper-wrapper');
//   advises.forEach( (recensione)=>{
//     let div=document.createElement('div');
//     div.classList.add('swiper-slide');
//     div.innerHTML=`<div class="card-utent ">
//     <h5 class="text-center pt-4">${recensione.name}</h5>
//     <p>${recensione.quote}</p>
//     </div>`
//     swiperWrapper.appendChild(div); 
// })
let mainNavbar = document.querySelector('#mainNavbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    mainNavbar.style.backgroundColor ='rgb(25,25,25)'

  }else
   return mainNavbar.style.backgroundColor ='transparent'
  
})