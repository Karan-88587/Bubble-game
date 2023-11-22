function makeBubbles(){
    // let bubbles = `<div class="bubble">NA</div>`;
    let bubbles = "";
    
    for (let i = 1; i <= 126; i++) {
        let ran = Math.floor(Math.random() * 50);   // Generates random number between 0 to 9.
        bubbles += `<div class="bubble">${ran}</div>`;   // It will add 126 bubbles using javascript. We can also add html elements in javascript like this.
    }
    
    document.querySelector("#pbottom").innerHTML = bubbles;
}
makeBubbles();

let timer = 60;
function runTimer(){
    let timerInt = setInterval(function(){
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else
        {
            clearInterval(timerInt);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}
runTimer();

let hitran = 0;
function getNewHit(){
    hitran = Math.floor(Math.random() * 50);
    document.querySelector("#hitval").textContent = hitran;
}
getNewHit();

let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function decreaseScore(){
    score -= 5;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", 
function(details){
    // console.log(details.target);    // It will display value with html tag.
    // console.log(Number(details.target.textContent));    // It will display only value from html tag.
    let clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitran)
    {
        increaseScore();    // It will increase score by 10.
        makeBubbles();  // It will create new bubbles.
        getNewHit();    // It will generate new value in hit.
    }
    else
    {
        decreaseScore();
        makeBubbles();
        getNewHit();
    }
})