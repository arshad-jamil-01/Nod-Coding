function NavAnimation(){
    var body = document.querySelector("body");
body.addEventListener("wheel", function(dets){
    if(dets.deltaY > 0){
        gsap.to("nav",{
            delay:0.5,
           duration:0.5,
           top:-80,
        })
    }

    else{
        gsap.to("nav",{
            duration:0.5,
            top:6
         })
    }
})
}

NavAnimation()