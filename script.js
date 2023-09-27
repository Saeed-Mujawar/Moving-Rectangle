var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (det) {
    var rectLoc = rect.getBoundingClientRect();
    var insideRectVal = det.clientX - rectLoc.left;

    if (insideRectVal < rectLoc.width / 2) {

        var redcolor = gsap.utils.mapRange(0, rectLoc.width / 2, 255, 0, insideRectVal);

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0 , 0)`

        });
    }
    else {
        var greencolor = gsap.utils.mapRange(rectLoc.width / 2, rectLoc.width, 0, 255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0, ${greencolor} , 0)`
        });
    }

});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white"
    })
});

// ------------------------------------------------------------------


window.addEventListener("mousemove", function (det) {
    var box = document.querySelector("#rectangle");

    var xval = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        100 + box.getBoundingClientRect().width / 2, 
        window.innerWidth - (100 + box.getBoundingClientRect().width / 2),
        det.clientX
    );
    gsap.to("#rectangle", {
        left: xval,
 
    });
});
