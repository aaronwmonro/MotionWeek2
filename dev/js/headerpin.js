
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const headerPinTL = gsap.timeline();

// gsap.set("#intro",{transformOrigin: "center"});

headerPinTL.from("#header-container",{});

export function headerPinAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  headerPinTL,
        pin: true,
        pinSpacing: false,
        // toggleActions: "play none none none",
        trigger: "#header-container",
        start:"top",
        end: "bottom"
        // scrub:2
    });
}