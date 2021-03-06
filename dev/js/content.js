import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const introTextTL = gsap.timeline();

// gsap.set("#intro-text",{transformOrigin: "center"});

introTextTL.from("#intro-text",{duration:3, x:-500});

export function introTextAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  introTextTL,
        // toggleActions: "play none none none",
        trigger: "#intro-text",
        start:"top, 100%",
        end: "bottom 80%",
        scrub: 2
    });
}

const paraTextTL = gsap.timeline();

// gsap.set("#intro",{transformOrigin: "center"});

paraTextTL.from("#intro",{duration:3, y:500});

export function paraTextAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  paraTextTL,
        // toggleActions: "play none none none",
        trigger: "#intro-text",
        start:"top, 90%",
        end: "bottom 30%",
        scrub: 2
    });
}

const introImgTL = gsap.timeline();

// gsap.set("#intro",{transformOrigin: "center"});

introImgTL.to("#img-1",{alpha:1})
            .to("#img-1",{xPercent:100})

            // .to("#img-1",{duration:3, x:1800})
            // .from("#img-2",{duration:3, x:-1800})
            // .to("#img-2",{duration:3, x:1800});

export function introImgAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation: introImgTL,
        toggleActions: "play none reverse none",
        trigger: "#img-1",
        start:"top, 70%",
        end: "bottom, 0%",
        scrub: 2
    });
}

const introImgTwoTL = gsap.timeline();

// gsap.set("#intro",{transformOrigin: "center"});

introImgTwoTL.to("#img-2",{duration:3,alpha:1})
            .to("#img-2",{duration:3, xPercent:-100})

            // .to("#img-1",{duration:3, x:1800})
            // .from("#img-2",{duration:3, x:-1800})
            // .to("#img-2",{duration:3, x:1800});

export function introImgTwoAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation: introImgTwoTL,
        toggleActions: "play none reverse none",
        trigger: "#img-2",
        start:"top, 70%",
        end: "bottom, 0%",
        scrub: 2
    });
}

const paraTwoTextTL = gsap.timeline();

// gsap.set("#intro",{transformOrigin: "center"});

paraTwoTextTL.from("#second-para",{duration:3, y:500});

export function paraTwoTextAnimation(){
    ScrollTrigger.create({
        // markers: true,
        animation:  paraTwoTextTL,
        // toggleActions: "play none none none",
        trigger: "#img-2",
        start:"top, 50%",
        end: "bottom 30%",
        scrub: 2
    });
}