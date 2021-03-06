'use strict';

//  scroll양이 navbar보다 많이 내리면 navbar를 보이게하고 아니면 투명하게해줘.
// 그럴려면 내가 한 scroll양과 navbar의 height를 알아야한다. 

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const contents = document.querySelectorAll('section');
const menu = document.querySelectorAll('.navbar_menu_item');
/*console.log(menu);*/
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// 스크롤이 생기면 메뉴 활성활.
window.addEventListener('scroll', () => {
  const sct = this.pageYOffset;
  console.log(sct);

  for(var i = 0; i < contents.length; i++){
    if(contents[i].offsetTop - 80 <= sct ){
      const idx = contents[i].getAttribute('data-num');
      for(var a = 0; a < menu.length; a++){
        menu[a].classList.remove('on');
      }
      menu[idx].classList.add('on');
    }
  }
});

// Handle scrolling when tapping on the navbar menu
// navbar menu를 클릭했을때 해당 내용이 나온다.
const navbarMenu = document.querySelector('.navbar_menu');
const inMauJors = document.querySelector('.about_majors');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
      return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link); //함수를아래로 했으니까 이제 지정만 해주고..

    
    
  });
    









    // Navbar toggle button for small screen
    const navbarToggleBtn = document.querySelector('.navbar_toggle_btn');
    navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});
    

    const homeContactBtn= document.querySelector('.home_contact');
    homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact'); //함수를아래로 했으니까 이제 지정만 해주고..
    });

    //줄여서 함수로 지정해준다.scrollTo가 공통으로 들어갔네..
    function scrollIntoView(selector){
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({behavior:"smooth"});
    }

    //스크롤 하면 home이 점점 투명해지는것 해보자!
    //1. home을 불러와서 변수지정---
    /*2. home의 화면높이가 800이라면 scrollY(화면맨윗)가 0일때는 투명도가 1(다보여지고) 
    중간인 scrolllY가 400일때는 투명도가 0.5, scrollY가 800일때는 투명도가 0이되게해보자
    home의  height을 알아야겠지.스크롤을 했을때 실행이 되는거니 이벤트로지정해보자.이것도 변수로지정해보자.
    */
    const home = document.querySelector('.home_container');
    const homeheight = home.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
       //console.log( 1 - window.scrollY /homeheight);
       home.style.opacity = 1- window.scrollY / homeheight;
    });

    // Home의 반정도 왔을때 arrowup의 visible이 보이게 하고 아닐때는 visible이 안보이게하라.

    const arrowUp = document.querySelector('.arrow-up');
   document.addEventListener('scroll', () => {
        if(window.scrollY > homeheight / 2 ){
            arrowUp.classList.add('visible');
        } else{
            arrowUp.classList.remove('visible');
        }
    });

    // About 
const inMauors = document.querySelector('.about_majors'); //박스
//const maJor = document.querySelector('.major'); 대문
const mouseI = document.querySelector('.bnt_click i')
const btnB = document.querySelector('.btn')

/*mouseI.addEventListener('click', () => {
  if(mouseI.classList.contains('transform')){
    mouseI.classList.remove('transform');
    inMauors.classList.remove('visible');
  } else {
    mouseI.classList.add('transform');
    inMauors.classList.add('visible');
  }
});*/


/*maJor.addEventListener('click', () => {
    if (maJor.classList.contains('transform')) {
      maJor.classList.remove('transform');
      inMauors.classList.remove('visible');
    } else {
      maJor.classList.add('transform');
      inMauors.classList.add('visible');
      
    }
  });*/
      
    // Arrow를 눌렀을때 위로 올라가기
    arrowUp.addEventListener('click', () => {
        scrollIntoView('#home');
    });

    // Projects
    //각 data-filter가 해당하는 data-type에 가도록
    const workBtnContainer = document.querySelector('.work_categories');
    const projectContainer = document.querySelector('.work_project');
    const projects = document.querySelectorAll('.project');
    workBtnContainer.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if(filter == null){ //filter가 null이면 아무것도 해주지않는다.
            return; 
        }
        //console.log(filter);

        //Remove selection from the previous item and select the new one
        const active = document.querySelector('.catagory_btn.selected');
        active.classList.remove('selected');
        const target =
        e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
        target.classList.add('selected');

        projectContainer.classList.add('anim-out');
        setTimeout(() => {  
            projects.forEach((project) => {
                //console.log(project.dataset.type);
                if(filter === '*' || filter === project.dataset.type){
                    project.classList.remove('invisible'); 
                } else {
                    project.classList.add('invisible'); 
                }
            });
            projectContainer.classList.remove('anim-out');
        },300); 
    });

    // modal
    const img = document.querySelectorAll('.work_project a[href="#"]');
    const lightbox = document.querySelector('#lightbox-overlay');
    const lightboxImg = lightbox.querySelector('img');
    
    for(var i = 0; i < img.length; i++){
      img[i].addEventListener('click', function(event){
          const imgNewSrc = event.currentTarget.querySelector("img").getAttribute('data-lightbox'); 
          console.log(imgNewSrc);
  
      lightboxImg.setAttribute('src', imgNewSrc);
      lightbox.classList.add('visible');
  });
  
  lightbox.addEventListener('click', function(){
      this.classList.remove('visible');
  });
  };
        
  