
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const headerScrollTL = gsap.timeline();

gsap.set("#arrow",{transformOrigin: "center"});

headerScrollTL.to("#header-text",{duration:3, yPercent:-500}, "headerScoll");

export function headerScrollAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  headerScrollTL,
        // toggleActions: "play none reverse none",
        trigger: "#intro-text",
        start:"top, 100%",
        end: "bottom 0%",
        scrub: 1
    });
}

const arrowScrollTL = gsap.timeline();

// gsap.set("#arrow",{transformOrigin: "center"});

arrowScrollTL.to("#arrow",{duration:3, yPercent:-1500});

export function arrowScrollAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  arrowScrollTL,
        // toggleActions: "play none reverse none",
        trigger: "#intro-text",
        start:"top, 100%",
        end: "bottom 0%",
        scrub: 1
    });
}