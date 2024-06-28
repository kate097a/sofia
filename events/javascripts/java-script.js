//write here your js

document.addEventListener("DOMContentLoaded", function() {

    const evList = {
        1: "МАСТЕР-КЛАСС ПО СОЗДАНИЮ ПЛЕЙЛИСТА",
        8: "ВЫСТАВКА НЕОБЫЧНЫХ ПЛЕЙЛИСТОВ",
        10: "КОНСТРУКТОР ФЕСТИВАЛЬ САМОДЕЛЬНЫХ ПЛЕЙЛИСТОВ ",
        18: "КОНСТРУКТОР ФЕСТИВАЛЬ САМОДЕЛЬНЫХ ПЛЕЙЛИСТОВ",
        20: "МАСТЕР-КЛАСС ПО СОЗДАНИЮ ПЛЕЙЛИСТА",
        21: "КОНСТРУКТОР ФЕСТИВАЛЬ САМОДЕЛЬНЫХ ПЛЕЙЛИСТОВ",
        27: "ВЫСТАВКА ПЛЕЙЛИСТОВ КУЛЬТУР И НАРОДОВ",
        28: "МАСТЕР-КЛАСС ПО СОЗДАНИЮ ПЛЕЙЛИСТА",
        29: "ЛЕКЦИЯ ЭЛЕМЕНТАРНАЯ ТЕОРИЯ ЗВУКА",
        30: "ЛЕКЦИЯ ФИЛОСОФИЯ МУЗЫКИ "
    }
   
    const calendar = document.getElementById("calendarCont")
    calendar.addEventListener("mousemove", (e) => {
        if (e.target.className == "calendarImg") {
            e.target.style.opacity="1";
        }

    })

    calendar.addEventListener("click", (e) => {
        if (e.target.className == "calendarImg") {
            aboutEvent(e.target.id.split("").splice(3).join(""));
            document.getElementById("aboutEvent").style.display="flex";
        }
    })
    
    function aboutEvent(evNum) {
        document.querySelector(".cursorDot").style.setProperty('z-index', '99999999999', 'important');
        let eventName = evList[evNum];
        document.getElementById("eventName").textContent = eventName;
        document.getElementById("eventPoster").style.backgroundImage=`url('./img/poster${evNum}.svg')`;

        document.getElementById("errorBtn").addEventListener("click", (e) => {
            document.getElementById("aboutEvent").style.display="none";
            document.querySelector(".cursorDot").style.setProperty('z-index', '1', 'important');
            document.getElementById("backArrow").removeEventListener("click", (e) => {});
            error();
        })

        document.getElementById("backArrow").addEventListener("click", (e) => {
            document.getElementById("aboutEvent").style.display="none";
            document.querySelector(".cursorDot").style.setProperty('z-index', '1', 'important');
            document.getElementById("backArrow").removeEventListener("click", (e) => {});
        })
    }

    function error() {
        document.getElementById("error").style.display="flex";
        document.querySelector(".cursorDot").style.setProperty('z-index', '90001', 'important');
        document.getElementById("errorText").addEventListener("click", (e) => {
            document.querySelector(".cursorDot").style.setProperty('z-index', '1', 'important');
            document.getElementById("error").style.display="none";
            document.getElementById("errorText").removeEventListener("click", (e) => {})
        });
    }


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
                duration:500,
                fill: "forwards"
            })
            
        });
});
