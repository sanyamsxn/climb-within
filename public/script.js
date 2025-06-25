gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({scrollTrigger: {
    trigger:"#box2",
    start:"top 90%",
    end: "10% 30%",
    scrub:true,
}})


tl.to("#pepsi", {
  duration: 1,
  top: "800px",
  left:"0%",
  rotate:"360deg",
  scale: 0.9
});



window.addEventListener("DOMContentLoaded", () => {
function runInitialAnimations() {
    // Create a timeline with default easing
    const onLoadTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    onLoadTl.to(
        "#header",
        {
          "--border-width": "100%",
          duration: 3,
        },
        0
      )
      // Slide in desktop nav links & sidebar icons from above
      .from(
        "#brand h1, #nav a",
        {
          y: -100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        0
      )
    
    
      .to(
        "#heading",
        {
          opacity: 1,
          duration: 1,
        },
        1
      )
      // Animate text stroke to solid color
      .to(
        "#heading",
        {
          delay: 0.5,
          duration: 1.2,
        },
        0
      )
      // Slide in each line of the heading from the right
    .from(
        ".line",
        {
          x: 100,
          delay: 1,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        0
      )

      .to(
        "#pepsi",
        {
          opacity: 1,
          scale: 1,
          delay: 1.5,
          duration: 1.3,
          ease: "power3.out",
          
        },
        0
      )


    onLoadTl.to(
        "#stamp",
        {
          opacity: 1,
          scale: 1,
          delay: 2,
          duration: 0.2,
          ease: "back.out(3)",

        },
        0
      )
      // Subtle vibration/bounce effect on the stamp
      // .to(
      //   "#stamp",
      //   {
      //     y: "+=5",
      //     x: "-=3",
      //     repeat: 2,
      //     yoyo: true,
      //     duration: 0.05,
      //     ease: "power1.inOut",
      //   },
      //   0
      // );

  }
      runInitialAnimations(); 

})


let message = "Welcome to a place where mountains are more than just landscapes. Here, every trail teaches you courage, and every climb shapes your character."
let textElement = document.getElementById("text");

gsap.to("#text span", {
  scrollTrigger: {
    trigger: "#box2",
    start: "top 60%",
    scrub:true
  },
  x:100,
  opacity:1,
  duration:1,
  ease: "back.out(1.7)",
  stagger: 0.15
});



gsap.to("#sha1", {
  scrollTrigger:{
    trigger: "#shapes",
    start: "top 30%",
    scrub:true
  },
  x:140,
  duration:1,
})


gsap.to("#sha2", {
  scrollTrigger:{
    trigger: "#shapes",
    start: "top 30%",
    scrub:true
  },
  x:-140,
  duration:1
})