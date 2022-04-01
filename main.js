'use strict';

//  scroll양이 navbar보다 많이 내리면 navbar를 보이게하고 아니면 투명하게해줘.
// 그럴려면 내가 한 scroll양과 navbar의 height를 알아야한다. 

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
// navbar menu를 클릭했을때 해당 내용이 나온다.
    const navbarMenu = document.querySelector('.navbar_menu');
    navbarMenu.addEventListener('click',(event) =>{
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }

    scrollIntoView(link);
    });
    

    // 클릭이 되면 우리가 등록한 함수가 호출되게 함.()=>{}
    // console.log(event.target); 내가클릭한 li 메뉴가 나온다.
   
    // dataset 은 index에 data- 넣었던것 다 세트를 말함.
   // console.log(event.target.dataset.link);


//    undifne이라고 나올수있다.if(link==null)
// Button Contact me를 click시 contact section으로 가라.
    const homeContactBtn= document.querySelector('.home_contact');
    homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
    });

    //줄여서 함수로 지정해준다.scrollTo가 공통으로 들어갔네..
    function scrollIntoView(selector){
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({behavior:"smooth"});
    }
