var qCounter = 0;
var q = ["You must've unlocked the briefcase.To check whether you're the one we're expecting tell us the combination<br>", "Hey there I see you've found the pendrive.<br>Tell me what's the alphanumeric code?","Let me know the name of all the eight people we had set up for the police to suspect (space separated)"];
var a = ['G5z3T8','9A4W2T4K8O7T3Q7L9B','Emily Wilson George Taylor Harry Jones Irene Adler Lily Brown Mike Smith Sam Andrews Steve Geller'];
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
                            ques.innerHTML = "Welcome Mrs. Smith";
                            event.target.value = "We've been expecting you";
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
    res.style.backgroundImage = 'url("static/x.png")';
    setTimeout(function () {
        res.style.backgroundImage = "";
    }, 1500);
}

function showTick() {
    res.style.backgroundImage = 'url("static/tick.png")';
    setTimeout(function () {
        res.style.backgroundImage = "";
    }, 1500);
}


function nextQuestion() {
    ques.innerHTML = q[qCounter];
}
