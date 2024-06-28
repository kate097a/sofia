//write here your js

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

    let poses = []

    let constructors = document.querySelectorAll(".constElem")
    for (let i = 0; i < constructors.length - 1; i++) {
        poses.push([window.getComputedStyle(constructors[i]).left, window.getComputedStyle(constructors[i]).top])
    }

    let posesCopy = poses.slice();

    let countPos = 0;


    window.addEventListener("resize", (e) => {
        poses = [];
        posesCopy = []
        for (let i = 0; i < constructors.length - 1; i++) {
            poses.push([window.getComputedStyle(constructors[i]).left, window.getComputedStyle(constructors[i]).top])
        }
    
        posesCopy = poses.slice();
    });

    document.getElementById("elem9").addEventListener("click", (e) => {
        poses = shuffle(poses)
        countPos ++
        if (countPos != 5) {
            for (let i = 0; i < constructors.length - 1; i++) {
                constructors[i].animate({
                    left: `${parseInt(poses[i][0].split("").slice(0, -2).join("")) * 100 / window.innerWidth}vw`,
                    top: `${parseInt(poses[i][1].split("").slice(0, -2).join("")) * 100 / window.innerWidth}vw`,
                }, {
                    duration:500,
                    fill: "forwards"
      
                })
            }
        } else {
            countPos = 0
            for (let i = 0; i < constructors.length - 1; i++) {
                constructors[i].animate({
                    left: `${parseInt(posesCopy[i][0].split("").slice(0, -2).join("")) * 100 / window.innerWidth}vw`,
                    top: `${parseInt(posesCopy[i][1].split("").slice(0, -2).join("")) * 100 / window.innerWidth}vw`,
                }, {
                    duration:500,
                    fill: "forwards"
      
                })
            }
        }
        
    })


    function shuffle(arr) {
        let newArr = [...arr];
        for (let i = newArr.length - 1 ; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }

});
