var squares = document.getElementsByClassName("square");
var squareColor= [];
function randColor(x) {
    for (var i = 0; i< x; i++) {
        var redC = Math.floor(Math.random() * 256);
        var blueC = Math.floor(Math.random() * 256);
        var greenC = Math.floor(Math.random() * 256);
        squareColor.push("rgb( " + redC + ", " + greenC + ", " + blueC +")");  
    }
    for (let i = 0; i < squareColor.length; i++) {
        squares[i].style.backgroundColor = squareColor[i];    
    }
    checkColor();
}
function checkColor() {
    var colIndex= Math.floor(Math.random()*squareColor.length);
    var selectedColor = "";
    selectedColor = squares[colIndex].style.backgroundColor;
    console.log(selectedColor);
    console.log(squareColor);
    document.getElementById("RGBTex").textContent = selectedColor;
    
    for (let i = 0; i < squareColor.length; i++) {
        squares[i].addEventListener("click", function () {
            console.log(squares[i].style.backgroundColor!=selectedColor);
            if (squares[i].style.backgroundColor!=selectedColor) {
                squares[i].style.backgroundColor = "black";
            }
            else{
                for (let i = 0; i < squareColor.length; i++) {
                    squares[i].style.backgroundColor = selectedColor;
                    document.getElementById("topDiv").style.backgroundColor = selectedColor;
                    
                }
            }
            
        });
        
    }
}
easyB = document.getElementById("easyB");
easyB.addEventListener("click", function(){
    squareColor = [];
    for (let i = 5; i >= 3; i--) {
        squares[i].style.display = "none";
        console.log("working");
    } 
    for (let i = 5; i >= 0; i--) {
        squares[i].style.backgroundColor= "black";
        console.log("working");
    }  

    randColor(3);  


});
hardB = document.getElementById("hardB");
hardB.addEventListener("click", function(){
    squareColor = [];
    selectedColor = "";
    for (let i = 5; i >= 3; i--) {
        squares[i].style.display = "block";
        console.log("working");
    }

    randColor(6);

});

