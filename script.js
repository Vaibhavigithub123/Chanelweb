// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

let tl = gsap.timeline({
    scrollTrigger:{
        trigger : ".front-page",
        start: "top top",
        end: "100%",
        // markers:true,
        scrub: true,
        pin: true,
    }
})
tl.fromTo('.front-page', {clipPath: "circle(5%)"}, {clipPath: "circle(75%)", duration:3})
tl.fromTo('.perfume-note', {scale : 0.8}, {scale: 0, opacity: 0, duration: 1}, "-=3")


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".second-page, .hero .hero-txt",
        start:"10% 20%",
        end:"50% 50% ",
        // markers:true,
        pin:true,
        scrub:1,
        pinSpacing:false
        
    }
})
tl2.from(".second-page", {opacity:0, y:"100%"})
tl2.from(".hero-txt", {x:"-150%"},"<1.5")
tl2.from(".hero-img", {x:"150%"},"<")



let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".third-page-content1",
        start:"50% 50%",
        end:"180% 50%",
        // markers:true,
        scrub:true,
        pinSpacing:false,
        onEnter: () => {
            document.querySelector(".third-page-content2 video").play();
        },
        onLeave: () =>{
            document.querySelector('.third-page-content2 video').pause();
            gsap.to(".third-page-content2", {
                width: "60vw",
                height: "50vh",
                duration: 0.5,
            })  
        },
        onEnterBack: () =>{
            document.querySelector(".third-page-content2 video").play();
        },
        onLeaveBack: () => {
            document.querySelector('.third-page-content2 video').pause();
        }
    }

})
tl3.to(".third-page-content2", {width: "100vw", ease:"sine.inOut"})

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".Winter-page3",
        start:"50% 50%",
        end:"300% 50%",
        scrub:1,
        pin:true,
        // markers:true
    }
})

tl4.to(".winter-collection-bg-div",{
    height:"65vh"
})
tl4.to(".winter-collection-heading",{
    height:"65vh"
},0)
tl4.to("#winter", {
    left: "30%",
    fontSize: "3vw"
},0)
tl4.to("#collection", {
    right:"0%",
    fontSize: "3vw"
},0)
tl4.to(".winter-collection-img-div", {
    marginTop:"-450%"
})
tl4.to(".winter-collection-bg-div",{
    height:"0vh"
},'a')
tl4.to(".winter-collection-heading",{
    height:"0vh"
},'a')
tl4.to("#winter", {
    left: 0,
    fontSize: "3.7vw"
},'a')
tl4.to("#collection", {
    right: "45%",
    fontSize: "3.7vw"
},'a')