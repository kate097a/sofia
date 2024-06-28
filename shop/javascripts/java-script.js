//write here your js

document.addEventListener("DOMContentLoaded", function() {
    const book = document.querySelector(".pages") 
    
    let countPages = 0;

    let paged = {
        1: "./img/book/1.png",
        2: "./img/book/2.png",
        3: "./img/book/3.png",
        4: "./img/book/4.png",
        5: "./img/book/5.png",
        6: "./img/book/6.png",
        7: "./img/book/7.png",
        8: "./img/book/8.png",
        9: "./img/book/9.png",
        10: "./img/book/10.png",
        11: "./img/book/11.png",
        12: "./img/book/12.png",
        13: "./img/book/13.png",
        14: "./img/book/14.png",
        15: "./img/book/15.png",
    }


    function scrollPages(paged) {
        if (countPages >= 15) {
            countPages = 1
        } else {
             countPages ++
        }
        document.querySelector(".bookImg").style.backgroundImage=`url(${paged[countPages]})`

    }

    scrollPages(paged)

    document.querySelector(".bookImg").addEventListener("click", (e) =>{
        scrollPages(paged)
    })


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


    const itemsList = { 
    1: {nameItem: "АУДИОКАССЕТА", price: 900, img: "./img/mini/cassette.png"},
    2: {nameItem: "СЕРТИФИКАТ", price: 2500, img: "./img/mini/convert.png"},
    3: {nameItem: "ШОППЕР", price: 2000, img: "./img/mini/shopper.png"},
    4: {nameItem: "ВИНИЛОВАЯ ПЛАСТИНКА", price: 990, img: "./img/mini/disk.png"},
    5: {nameItem: "ФУТБОЛКА", price: 1500, img: "./img/mini/tshirt.png"},
    6: {nameItem: "ФИРМЕННЫЙ БЕЙДЖ", price: 990, img: "./img/mini/cards.png"},
    7: {nameItem: "ФИРМЕННЫЙ ФЛАГ", price: 2300, img: "./img/mini/flag.png"},
    8: {nameItem: "ФИРМЕННЫЙ КОНВЕРТ", price: 2300, img: "./img/mini/converts.png"},
} 
    let cartIn = []

    let cartsBtns = document.querySelectorAll(".cart");
    for (let i = 0; i < cartsBtns.length; i++) {
        cartsBtns[i].addEventListener("click", (e) => {
            let itemNum = e.target.id.split("")[4];
            if (document.getElementById(`cart${itemNum}`).classList.contains("cartComplit")) {
                document.getElementById(`cart${itemNum}`).classList.remove("cartComplit");
                let re = cartIn.splice(cartIn.indexOf((`${itemsList[itemNum]["nameItem"]}$$$${itemsList[itemNum]["price"]}$$$${itemsList[itemNum]["img"]}`)), 1);
               console.log(cartIn)
            } else {
                document.getElementById(`cart${itemNum}`).classList.add("cartComplit");
                cartIn.push(`${itemsList[itemNum]["nameItem"]}$$$${itemsList[itemNum]["price"]}$$$${itemsList[itemNum]["img"]}`);
                console.log(cartIn);
            }

        })
    }

    let cartOpen = document.querySelector(".cartAll")

    cartOpen.addEventListener("click", (e) => {
        document.querySelector("body").style.overflow="hidden"
        document.querySelector(".cartBack").style.opacity="0.5";
        document.querySelector(".cartBlock").style.pointerEvents="all";
        document.querySelector(".cartContainer").style.left="60vw";
        cartFilling()


        document.querySelector(".cartBlock").addEventListener("click", (e) => {
            if (e.target.classList[0] != "complitOrder") {
                document.querySelector("body").style.overflow="scroll"
                document.querySelector(".cartBack").style.opacity="0";
                document.querySelector(".cartBlock").style.pointerEvents="none";
                document.querySelector(".cartContainer").style.left="100vw";
                clearCart()
                document.querySelector(".cartBlock").removeEventListener("click", (e) => {})
            }
        })

    })

    function clearCart() {
        let a = document.querySelectorAll(".cartItemContainer")
        for (let i = 0; i < a.length; i++) {
          a[i].remove()  
        }
    }

    function cartFilling() {
        let summ = 0;
        let count = cartIn.length;
        console.log(cartIn)

        document.querySelector(".cartTitle").innerHTML=`КОРЗИНА / ${count}шт.`

        for (let i = 0; i < cartIn.length; i++) {
            count ++;
            let container = document.querySelector('.itemsCards');
            let div = document.createElement('div');
            div.style.width="90%"
            div.style.height="15vw"
            div.style.display="flex"
            div.style.justifyContent="space-between"
            div.style.marginBottom="1.5vw"
            div.classList.add('cartItemContainer');
            container.append(div);

            let imgItem = document.createElement('div');
            imgItem.style.width="15vw"
            imgItem.style.height="15vw"
            imgItem.style.backgroundImage=`url("${cartIn[i].split("$$$")[2]}")`
            imgItem.style.backgroundSize="100%";
            imgItem.classList.add('cartItemContainer');
            div.append(imgItem);

            let textBlock = document.createElement("div");
            textBlock.style.width="50%"
            textBlock.style.height="8vw"
            textBlock.style.display="flex"
            textBlock.style.flexWrap="wrap"
            textBlock.style.justifyContent="space-between"
            textBlock.classList.add('textBlockItems');
            div.append(textBlock);

            let titleItem = document.createElement("p");
            titleItem.style.width="100%"
            titleItem.style.fontSize="1.2vw"
            titleItem.style.color="#808080"
            titleItem.style.textAlign="left"
            titleItem.style.fontFamily="Inter"
            titleItem.innerHTML=`${cartIn[i].split("$$$")[0]}`
            titleItem.classList.add('titleItem');
            textBlock.append(titleItem);

            let countText = document.createElement("p");
            countText.style.fontSize="1vw"
            countText.style.color="#808080"
            countText.style.textAlign="left"
            countText.style.fontFamily="Inter"
            countText.innerHTML="1шт"
            countText.classList.add('countTextItems');
            textBlock.append(countText);

            let priceText = document.createElement("p");
            priceText.style.fontSize="1vw"
            priceText.style.color="#808080"
            priceText.style.textAlign="left"
            priceText.style.fontFamily="Inter"
            priceText.innerHTML=`${cartIn[i].split("$$$")[1]}₽`
            priceText.classList.add('priceItem');
            textBlock.append(priceText);


            summ += parseInt(cartIn[i].split("$$$")[1]);
            console.log(summ)
        }

        document.querySelector(".pr").innerHTML=`${summ}₽`
        document.querySelector(".pr1").innerHTML=`${summ}₽`
    }

    document.querySelector(".complitOrder").addEventListener("click", (e) => {
        document.querySelector(".orderComplit").style.display="flex"
        document.querySelector(".cartContainer").style.left="100vw";
        clearCart()
        document.querySelector(".complitOrder").removeEventListener("click", (e) => {})
    })


});
