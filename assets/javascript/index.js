

let boxOne = document.getElementById('box__1');
let boxTwo = document.getElementById('box__2');
let boxThree = document.getElementById('box__3');
let boxFour = document.getElementById('box__4');
let boxFive = document.getElementById('box__5');
let boxSix = document.getElementById('box__6');
let boxSeven = document.getElementById('box__7');
// box click event
boxColors();
function boxColors(){
    

    boxOne.addEventListener('click', function(){
        boxOne.style.background = generateRandomColor();
    });
    boxTwo.addEventListener('click', function(){
        boxTwo.style.background = generateRandomColor();
    });
    boxThree.addEventListener('click', function(){
        boxThree.style.background = generateRandomColor();
    });
    boxFour.addEventListener('click', function(){
        boxFour.style.background = generateRandomColor();
    });
    boxFive.addEventListener('click', function(){
        boxFive.style.background = generateRandomColor();
    });
    boxSix.addEventListener('click', function(){
        boxSix.style.background = generateRandomColor();
    });
    boxSeven.addEventListener('click', function(){
        boxSeven.style.background = generateRandomColor();
    });
    
}

// To generate random colors
function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6,0);
    console.log(randomColor)
    return `#${randomColor.toUpperCase()}`;
}




// To generate primary colors
let rainBowColors = document.getElementById("primary__color-button");
let rainBowColorArray = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
rainBowColors.addEventListener('click', rainBow);

// rainbow color function

function rainBow() {
    boxOne.style.background = rainBowColorArray[Math.floor(Math.random()* rainBowColorArray.length)];
    boxTwo.style.background = rainBowColorArray[Math.floor(Math.random()* rainBowColorArray.length)];
    boxThree.style.background = rainBowColorArray[Math.floor(Math.random()* rainBowColorArray.length)];
    boxFour.style.background = rainBowColorArray[Math.floor(Math.random()* rainBowColorArray.length)];
    boxFive.style.background = rainBowColorArray[Math.floor(Math.random()* rainBowColorArray.length)];
    boxSix.style.background = rainBowColorArray[Math.floor(Math.random()* rainBowColorArray.length)];
    boxSeven.style.background = rainBowColorArray[Math.floor(Math.random()* rainBowColorArray.length)];

}




// Reset Button
let resetButton = document.getElementById('reset__button');
resetButton.addEventListener('click', resetButtonClick);

function resetButtonClick(){
   let boxColors = document.querySelectorAll('.box');
   console.log(boxColors)
   boxColors.forEach(function (boxColors){
       return boxColors.style.background = "#0000FF";
   })
}