
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const headerScrollTL = gsap.timeline();

gsap.set("#header-hero",{transformOrigin: "center"});

headerScrollTL.to("#header-hero",{duration:3, x:1500});

export function headerScrollAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  headerScrollTL,
        // toggleActions: "play none none none",
        trigger: "#intro-text",
        start:"top, 100%",
        end: "bottom 10%",
        scrub: 3
    });
}
