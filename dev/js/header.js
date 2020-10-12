import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export function headerAnimation(){
    gsap.from("#header-text",{duration:2, y:1500, ease: "back"});
}

export function arrowAnimation(){
    gsap.from("#arrow",{duration:2, y:500, ease: "back"});
}
// const headerScrollTL = gsap.timeline();

// headerScrollAnimation.to("#header-hero",{duration:1.5, alpha:0, x:400});

// export function headerScrollAnimation(){
//     ScrollTrigger.create({
//         markers: true,
//         animation: headerScrollTL,
//         // toggleActions: "play none none none",
//         trigger: "#intro-container",
//         start:"top, 50%",
//         end: "bottom 50%",
//         scrub: true
//     });
// }