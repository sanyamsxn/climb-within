import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll-based animation
export const animatePepsiScroll = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#box2",
      start: "top 90%",
      end: "10% 30%",
      scrub: true,
    },
  });

  tl.to("#pepsi", {
    duration: 1,
    top: "740px",
    left: "0%",
    rotate: "360deg",
    scale: 0.9,
  });
};

// On-load animations
export const animateHeaderAndNav = () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to("#header", {
    "--border-width": "100%",
    duration: 3,
  }, 0) // start at 0 seconds

  .from("#brand h1, #nav a", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  }, 0); // also start at 0 seconds

  return tl;
};

// Heading fade-in
export const animateHeading = () => {
  return gsap.to("#heading", {
    opacity: 1,
    duration: 1,
  });
};

// Lines slide in
export const animateLines = () => {
  return gsap.from(".line", {
    x: 100,
    delay: 0.7,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
};

// Pepsi scale & fade-in
export const animatePepsi = () => {
  return gsap.to("#pepsi", {
    opacity: 1,
    scale: 1,
    delay: 1.5,
    duration: 1.3,
    ease: "power3.out",
  });
};

// Stamp pop animation
export const animateStamp = () => {
  return gsap.to("#stamp", {
    opacity: 1,
    scale: 1,
    delay: 2,
    duration: 0.2,
    ease: "back.out(3)",
  });
};

// Master timeline to sequence them all
// export const runInitialAnimations = () => {
//   const onLoadTl = gsap.timeline({ defaults: { ease: "power2.out" } });

//   onLoadTl
//     .add(animateHeaderBorder(), 0)
//     .add(animateNavAndBrand(), 0)
//     .add(animateHeading(), 1)
//     .add(animateLines(), 0)
//     .add(animatePepsi(), 0)
//     .add(animateStamp(), 0);
// };

// Scroll-based text animation
export const animateTextScroll = () => {
  gsap.to("#text span", {
    scrollTrigger: {
      trigger: "#box2",
      start: "top 70%",
      scrub: true,
    },
    x: 100,
    opacity: 1,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.15,
  });
};

// Shape animations
export const animateShapes = () => {
  gsap.to("#sha1", {
    scrollTrigger: {
      trigger: "#shapes",
      start: "top 30%",
      scrub: true,
    },
    x: 140,
    duration: 1,
  });

  gsap.to("#sha2", {
    scrollTrigger: {
      trigger: "#shapes",
      start: "top 30%",
      scrub: true,
    },
    x: -140,
    duration: 1,
  });
};
