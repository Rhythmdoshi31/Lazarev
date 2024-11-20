function menuAnimation(){
    const menuElem = document.querySelector("#menuElem");
    const menu = document.querySelector("#menu");

    let isHovering = false;

function showMenu() {
    isHovering = true;
    let tl = gsap.timeline();
    tl.to(menuElem, {
        backgroundColor: "#3D3D3D",
        duration: 0.1,
    });
    tl.to(menu, {
        opacity: 1,
        duration: 0.3,
    });
}

function hideMenu() {
    isHovering = false;
    setTimeout(() => {
        // Only hide if neither element is hovered
        if (!isHovering) {
            let tl = gsap.timeline();
            tl.to(menuElem, {
                backgroundColor: "#111111",
                duration: 0.1,
            });
            tl.to(menu, {
                opacity: 0,
                duration: 0.2,
            });
        }
    }, 100); // Small delay to ensure smooth interaction
}

// Event listeners for menuElem
menuElem.addEventListener("mouseenter", showMenu);
menuElem.addEventListener("mouseleave", hideMenu);

// Event listeners for menu
menu.addEventListener("mouseenter", () => (isHovering = true));
menu.addEventListener("mouseleave", hideMenu);
}
function navScrolling(){
    gsap.to("nav", {
        scrollTrigger:{
            trigger: "#page1",
            start: "top top",
            end: "bottom top",
            scrub: true,
            onEnter: () => {
                gsap.to("nav", {
                    height: "6.1vh",
                    duration: 0.5,
                });
                gsap.to("nav", {
                    "--underline-opacity": 1,
                    duration: 0.5,
                });
                gsap.to("#menu", {
                    top: "6.3vh",
                    duration: 0.3,
                });
            },
            onLeaveBack: () => {
                gsap.to("nav", {
                    height: "9vh",
                    duration: 0.5,
                });
                gsap.to("nav", {
                    "--underline-opacity": 0,
                    duration: 0.5,
                });
                gsap.to("#menu", {
                    top: "7.3vh",
                    duration: 0.3,
                });
            }
        }
    })
}
function page2vids(){
    const item1 = document.querySelectorAll(".item1");
item1.forEach(function(item){
    const video = item.querySelector(".bg-vid");
    item.addEventListener("mouseenter", function(){
        video.play();
    });
    item.addEventListener("mouseleave", function(){
        video.pause();
        video.currentTime = 0;
    });
});
}
function  floatingAnimation(){
    let vidDiv = document.querySelector("#video-div");
document.addEventListener("mousemove", function(dets){
    gsap.to("#floating-div", {
        x: dets.x,
        y: dets.y,
    })
})
vidDiv.addEventListener("mouseenter", function(){
    vidDiv.style.cursor = "pointer";
    gsap.to("#floating-div", {
        opacity: 1,
    })
})
vidDiv.addEventListener("mouseleave", function(){
    vidDiv.style.cursor = "default";
    gsap.to("#floating-div", {
        opacity: 0,
    })
})
}


menuAnimation();
navScrolling();
page2vids();
floatingAnimation();