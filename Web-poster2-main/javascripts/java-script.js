
let count = 0;
function countPages() {
  reset();
  count += 1;
  console.log(count);
  if (count <= document.querySelectorAll('section').length) {
    document.getElementById("page" + count).style.display="flex";
  } else {
    count = 0;
    countPages();
  }
  
  if (count == 1) {
    firstPage();
  }
}

function reset() {
  for (let i = 1; i <= document.querySelectorAll('section').length; i++) {
    document.getElementById("page" + i).style.display="none";
  }
}

function page2() {
  $(document).unbind('mousemove');
  $(document).off("mouseup");
  $('.bigCircle').off("mousedown");
  reset();
  console.log("2ctr");
  document.getElementById("page2").style.display="flex";
  let btnBack = document.getElementById("button2");
  btnBack.addEventListener("click", function(e) {
    a.onmousedown = function(e) {none}
    reset();
    document.getElementById("page1").style.display="flex";
    firstPage()
  });

  
  let a = document.getElementById("slider");
  a.onmousedown = function(e) {
    btn = e.target;
    e.preventDefault();
    let shiftX = e.clientX - btn.getBoundingClientRect().left;
    let shiftY = e.clientY - btn.getBoundingClientRect().top;


    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp)

    function onMouseMove(e) {
      btn.style.zIndex = 100;
      let newLeft = e.clientX ;
      let newTop = e.clientY;
      btn.style.left = newLeft - 50 + "px";
      btn.style.top = newTop - 50 + "px";
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp)
    }
  }


  
  /*console.log("ddd")
  var div = document.getElementById('puzzlik1');
  var listener = function(e) {
    div.style.left = e.pageX - 50 + "px";
    div.style.top = e.pageY - 50 + "px";
  };
  
  puzzlik1.addEventListener('mousedown', e => {
      document.addEventListener('mousemove', listener);
  });
  
  puzzlik1.addEventListener('mouseup', e => {
      document.removeEventListener('mousemove', listener);
  });
*/
  

  
  return
}

function page3() {
  $(document).unbind('mousemove');
  $(document).off("mouseup");
  $('.bigCircle').off("mousedown")
  reset();
  console.log("3ctr")
  document.getElementById("page3").style.display = "flex";
  let btnBack = document.getElementById("button3");
  btnBack.addEventListener("click", function(e) {
    reset();
    document.getElementById("page1").style.display = "flex";
    firstPage()
  });
  let way = "";
  let deg = 0;
  let speed = 0;
  let flag = false;
  let degrisi = [];

  function randomSpeed() {
    return Math.random() * (6 - 2) + 2;
  }

  function randomCount() {
    return Math.floor(Math.random() * (360 - 45 + 1)) + 45;
  }

  function generateRandomRotations() {
    degrisi = [];
    for (let i = 0; i < 8; i++) {
      degrisi.push(randomCount());
    }
  }

  function circlesMoving() {
    setTimeout(() => sound.play(), 4500)
    degrisi.forEach((countDeg, i) => {
      let obj = document.getElementById("circle" + (i + 1));
      let speed = randomSpeed() * 1000;
      obj.style.transition = `transform ${speed}ms linear`;
      obj.style.transform = `rotate(${countDeg}deg)`;
    });
  }

  function stop() {
    for (let i = 1; i <= 8; i++) {
      let obj = document.getElementById("circle" + i);
      obj.style.transition = 'none';
    }

  }

  let square = document.getElementById("square");
  square.onclick = function() {
    generateRandomRotations();
    circlesMoving();
    console.log(degrisi);
  };

  // Генерируем углы поворота при загрузке страницы
  generateRandomRotations();

  // Добавляем событие для возврата на страницу 1 при клике
  let btnReturn = document.getElementById("button3");
  btnReturn.addEventListener("click", function(e) {
    reset();
    sound.pause()
    document.getElementById("page1").style.display = "flex";
    firstPage();
  });
}



function page4() {
  $(document).unbind('mousemove');
  $(document).off("mouseup");
  $('.bigCircle').off("mousedown")
  reset();
  console.log("4ctr")
  document.getElementById("page4").style.display="flex";
  let btnBack = document.getElementById("button4");
  btnBack.addEventListener("click", function(e) {
    reset();
    document.getElementById("page1").style.display="flex";
    firstPage()


  });

  let btn1 = document.getElementById("animButton1");
  let btn2 = document.getElementById("animButton2");
  let btn3 = document.getElementById("animButton3");
  let btn4 = document.getElementById("animButton4");

  btn1.addEventListener("click", (e) => {
    let animObj = document.getElementById("circleCricles");
    let animObj1 = document.getElementById("circleOfMiniCricles");
    if (btn1.classList.length == 2) {
      animObj.style.animation="none";
      animObj1.style.animation="none";
      btn1.classList.remove('clicked');
    } else {
      animObj.style.animation=`spin 2s infinite linear`;
      animObj1.style.animation=`spin1 2s infinite linear`;
      btn1.classList.add('clicked');
   }
  })

  btn2.addEventListener("click", (e) => {
    let animObj = document.getElementById("movCrcl1");
    let animObj1 = document.getElementById("movCrcl2");
    if (btn2.classList.length == 2) {
      animObj.style.animation="none";
      animObj1.style.animation="none";
      btn2.classList.remove('clicked');
    } else {
      animObj.style.animation=`spining  3s infinite linear`;
      animObj1.style.animation=`spining1  3s infinite linear`;
      btn2.classList.add('clicked');
   }
  })

  btn3.addEventListener("click", (e) => {
    let animObj = document.getElementById("movMiniCrcl1");
    let animObj1 = document.getElementById("movMiniCrcl2");
    let animObj2 = document.getElementById("movMiniCrcl3");
    let animObj3 = document.getElementById("movMiniCrcl4");
    if (btn3.classList.length == 2) {
      animObj.style.animation="none";
      animObj1.style.animation="none";
      animObj2.style.animation="none";
      animObj3.style.animation="none";
      btn3.classList.remove('clicked');
    } else {
      animObj.style.animation=`movee 1s infinite linear`;
      animObj1.style.animation=`movee1 1s infinite linear`;
      animObj2.style.animation=`movee2 1s infinite linear`;
      animObj3.style.animation=`movee3 1s infinite linear`;
      btn3.classList.add('clicked');
   }
  })

  btn4.addEventListener("click", (e) => {
    let animObj = document.getElementById("someSircles1");
    let animObj1 = document.getElementById("someSircles2");
    let animObj2 = document.getElementById("someSircles3");
    let animObj3 = document.getElementById("someSircles4");
    if (btn4.classList.length == 2) {
      animObj.style.animation="none";
      animObj1.style.animation="none";
      animObj2.style.animation="none";
      animObj3.style.animation="none";
      btn4.classList.remove('clicked');
    } else {
      animObj.style.animation=`join 1s infinite linear`;
      animObj1.style.animation=`join1 1s infinite linear`;
      animObj2.style.animation=`join2 1s infinite linear`;
      animObj3.style.animation=`join3 1s infinite linear`;
      btn4.classList.add('clicked');
   }
  })

  
  return
}

function page5() {
  $(document).unbind('mousemove');
  $(document).off("mouseup");
  $('.bigCircle').off("mousedown")
  reset();
  console.log("5ctr")
  document.getElementById("page5").style.display="flex";
  let btnBack = document.getElementById("button5");
  btnBack.addEventListener("click", function(e) {
    reset();
    document.getElementById("page1").style.display="flex";
    firstPage()
  });

  let grid = document.getElementById("allGrid");
  grid.addEventListener("mousemove", (e) => {
    let tg = e.target;
    if (tg.classList[1] == "blue") {
      if (tg.classList.length != 4) {
        tg.style.animation=`blue1 1s infinite linear`;
        tg.classList.add("actived")
      }
    } else if (tg.classList[1] == "gold") {
      if (tg.classList.length != 4) {
        tg.style.animation=`gold1 1s infinite linear`;
        tg.classList.add("actived")
      }
    } else if (tg.classList[1] == "white") {
      if (tg.classList.length != 4) {
        tg.style.animation=`white1 1s infinite linear`;
        tg.classList.add("actived")
      }
    } 
  });

  return
}


function firstPage() {

  document.getElementById("bigCircle").onselectstart = function() {
    return false;
  };

  const list = ["buttonSt1", "buttonSt2", "buttonSt3", "buttonSt4"]
  function cheaking() {
    orng = document.getElementById("orng");
    let orngCoords = orng.getBoundingClientRect();
    let minimum = 100000000000000;
    let minimumName = "";
    for (el in list) {
      let elem = document.getElementById(list[el])
      let coords = elem.getBoundingClientRect();
      var a = orngCoords.left - coords.left;
      var b = orngCoords.top - coords.top;

      var c = Math.sqrt( a*a + b*b )
      if (c < minimum) {
        minimum = c;
        minimumName = list[el]
      }
    }
    console.log(minimum, minimumName);
    return [minimumName, minimum]
  }

  let rotation = 0;
  let rotating = false;
  let startX = 0;

                    
  jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
  };
       
  $(document).mousemove(function(e){
    if (!rotating) return;
    let circle = document.getElementById("bigCircle")
    if (rotation <= 90 &&  rotation >= -180) {
      rotation = startX - e.clientX;
      circle.style.transform=`rotate(${rotation}deg)`;
    }

    if (rotation > 90) {
      rotation = 90;
      circle.style.transform=`rotate(${rotation}deg)`;
    }

    if (rotation < -180) {
      rotation = -180;
      circle.style.transform=`rotate(${rotation}deg)`;
    }
  });

  $(document).on("mouseup", function(e){
    rotating = false;
    let nearest = cheaking();
    if (nearest[0] == "buttonSt1") {
      $('.bigCircle').rotate(90); 
      setTimeout(page2, 1000);
    } else if (nearest[0] == "buttonSt2") {
      $('.bigCircle').rotate(-180);
      setTimeout(page3, 1000);
    } else if (nearest[0] == "buttonSt3") {
      $('.bigCircle').rotate(-90);
      setTimeout(page4, 1000);
    } else if (nearest[0] == "buttonSt4") {
      $('.bigCircle').rotate(0);
      setTimeout(page5, 1000);
    }

  });

  $('.bigCircle').on("mousedown", function(e) {
    startX = e.clientX;
    rotating = true;
  });
};


window.onload = function() {
    countPages();
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
};

