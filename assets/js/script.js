
// or even an Array of elements
// let taffe = document.querySelector(".htag");


// gsap.fromTo(taffe, { x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
//  gsap.to(".box", {
//   x: 200,
// });


// let circlec = document.querySelector(".circle");


// gsap.fromTo(".circle",
//    { duration: 1, y: 100, stagger: 0.5, },
//    { duration: 1, y: -100, stagger: 0.5, yoyo: true, repeat: -1 }

// );
// gsap.from(".ribbon-wrapper h5", {
//     scrollTrigger: {
//         trigger: ".timelline",
//         start: "60% 50%",
//         end: "70% 30%",
//         scrub: 2,

//     },
//     translate: "-100%",
//     duration: 1,
//     opacity: 0,
// });
// gsap.to(".ribbon-wrapper", {
//     scrollTrigger: {
//         trigger: ".timelline",
//         start: "60% 50%",
//         end: "70% 30%",
//         scrub: 2,
//     },
//     duration: 1,
//     opacity: 1,
// });


// let sbtn = document.querySelector(".ban-d");

// let animation = gsap.fromTo(".scrool-abtn", { left: "85%", top: "80%", opacity: 1, duration:2, }, { left: "85%", top: "85%", opacity: 1, duration:1.5,repeat:-1,yoyo:true});

// sbtn.addEventListener("mouseenter", () => animation.play());
// sbtn.addEventListener("mouseleave", () => animation.reverse());

gsap.from(".grandwar", {
    scrollTrigger: {
        trigger: ".timelline",
        start: "60% 50%",
        end: "70% 30%",
        scrub: 2,

    },
    translate: "100%",
    duration: 1,
    opacity: 0,
});


gsap.fromTo(".scrool-abtn",
    {
        left: "85%",
        top: "80%",
        opacity: 1,
        duration: 2,
        ease: Power1.easeOut,
    },
    {
        left: "85%",
        top: "84%",
        opacity: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeOut,
    }
);

// Footer Dog Animation
gsap.to(".footer-dog", {scrollTrigger: {trigger: ".timelline",start: "60% 50%", end: "70% 30%",scrub: 2,},right:"25%",duration: 5,});

