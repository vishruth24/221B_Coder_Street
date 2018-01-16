var qCounter = 0;
var q = ['1. Who the hell ?', '2. What the Frak ?', '3. Get Lost ?'];
var a = ['god', 'god', 'god'];
var ques = document.querySelector("#ques");
ques.innerHTML = q[qCounter];
var res = document.querySelector("#res");
var inp = document.getElementById("field");

function  validate(event) {
    if (qCounter < q.length) {
        if (event.keyCode === 13) {
            if (a[qCounter] === event.target.value) {
                qCounter++;
                showTick();
                event.target.readOnly = true;
                setTimeout(function () {
                    event.target.value = "";
                    event.target.placeholder = "Type your answer here";
                    event.target.readOnly = false;
                    event.autofocus = 0;
                }, 1500);
                setTimeout(function () {
                        res.style.backgroundImage = '';
                        if (qCounter >= q.length) {
                            ques.innerHTML = "Your Aadhar Number: ";
                            event.target.value = "7931-2638-1628";
                            event.target.readOnly = true;
                        } else {
                            nextQuestion();
                        }
                    }, 1500);
            } else {
                showX();
            }
        }
    }
}

function showX() {
    res.style.backgroundImage = 'url("x.png")';
    setTimeout(function () {
        res.style.backgroundImage = "";
    }, 1500);
}

function showTick() {
    res.style.backgroundImage = 'url("tick.png")';
    setTimeout(function () {
        res.style.backgroundImage = "";
    }, 1500);
}


function nextQuestion() {
    ques.innerHTML = q[qCounter];
}


