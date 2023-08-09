var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");
var blurwhite=document.querySelector("#cursor-blur-white");

document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"

    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"

    blurwhite.style.left=dets.x-100+"px"
    blurwhite.style.top=dets.y-100+"px"

})


gsap.to("#nav", {
    backgroundColor: "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        srub:1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        srub:2
    }

})