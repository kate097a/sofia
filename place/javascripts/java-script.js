
document.addEventListener("DOMContentLoaded", function() {
    const cursorDot = document.getElementById("cursorDot")

    document.addEventListener("mousemove", (e) => {
        let posX = e.clientX;
        let posY = e.clientY;
        let scrollPos = scrollY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
            cursorDot.animate({
                left: `${posX}px`,
                top: `${posY}px`,
                width: "7vw",
                backgroundImage: "url('./img/r.svg')",
                backgroundSize: '20%',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "3.4vw 3.4vw",
                height: "7vw",
            }, {
                duration:300,
                fill: "forwards"
            })
            
        });
});

