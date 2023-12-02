const navbar=document.querySelector('.navbar');
const header_content_p=document.querySelector('.header-content>p');
const toUp=document.querySelector('.toUpbtn');
const about=document.querySelector(".about");
const nav_links = document.querySelectorAll('.nav-link');
console.log(nav_links);
window.addEventListener('scroll',()=>{
    if(window.scrollY>header_content_p.offsetTop){
        navbar.style.cssText="background-color:white;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;";

    }else{
        navbar.style.cssText="background-color:transparent ;box-shadow: none ;";
    }

    if(window.scrollY>about.offsetTop){
        toUp.classList.remove("opacity-0","invisible");
    }else{
        toUp.classList.add("opacity-0","invisible");
    }
})

const loader=document.querySelector('.loading_spinner');
window.addEventListener('load',()=>{
    setTimeout(()=>{
        loader.classList.add('opacity-0','invisible');
        document.body.style.overflow="auto";
    },1000)
});

toUp.addEventListener('click',()=>{
    window.scroll(
        {
            top:0,
            behavior:"smooth"
        }
    )
})

for(let i=0;i<nav_links.length;i++){
    nav_links[i].addEventListener('click',(e)=>{
        e.preventDefault();
        let current_id = nav_links[i].getAttribute("href");
        window.scroll({
            top:document.querySelector(current_id).offsetTop,
            behavior : "smooth"
        })
        document.querySelector(".nav-link.active").classList.remove('active');
        nav_links[i].classList.add("active");
    })
}