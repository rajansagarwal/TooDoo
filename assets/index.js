var elements = [];
window.onload = function() {
    if (JSON.parse(localStorage.getItem("elements")) != null) elements = JSON.parse(localStorage.getItem("elements"));
    console.log(elements);
    display();
};

function addElement() {
    if (document.querySelector(".addTxt").value.trim() != "") {
        elements.push(document.querySelector(".addTxt").value.trim());
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
        display();
    }
}

function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < elements.length; i++) document.querySelector(".list").innerHTML += "<center><div class='element'>" + elements[i] + "<img class='tick' src = 'https://i2.wp.com/entman.com/wp-content/uploads/2016/09/checkmark.png?fit=256%2C256&ssl=1' onclick='strike(" + i + ")'><img class='dustbin' src = 'https://img.icons8.com/bubbles/2x/trash.png' onclick='del(" + i + ")'></div></center><br>";
}

function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function strike(index) {
    if (elements[index].includes("<strike>")) {
        elements[index] = elements[index].replace("<strike>", "");
    } else {
        elements[index] = "<strike>" + elements[index] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function strike(index) {
    if (elements[index].includes("<strike>")) {
        elements[index] = elements[index].replace("<strike>", "");
    } else {
        elements[index] = "<strike>" + elements[index] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;

startBtn.addEventListener("click", () => {
  let btn = localStorage.getItem("btn");

  if (btn === "focus") {
    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    mins = +localStorage.getItem("breakTime") || 1;
  }

  seconds = mins * 60;
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  paused = false;
});

function decremenT() {
  mindiv.textContent = Math.floor(seconds / 60);
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if (circle.classList.contains("danger")) {
    circle.classList.remove("danger");
  }

  if (seconds > 0) {
    perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
    setProgress(perc);
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);
    if (seconds < 10) {
      circle.classList.add("danger");
    }
  } else {
    mins = 0;
    seconds = 0;
    bell.play();
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
      startBtn.textContent = "Start Break";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
    } else {
      startBtn.classList.remove("break");
      startBtn.textContent = "start focus";
      localStorage.setItem("btn", "focus");
    }
    startBtn.style.transform = "scale(1)";
  }
}
