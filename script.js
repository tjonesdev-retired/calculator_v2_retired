// doesn't allow multiple digit nums
// need to allow multiple strings of problems (3 + 3 + 3)
// percent and decimal need to be added
// negative numbers don't work


$(document).ready(function() {
  // screen starts with 0, maths is blank
  var screen = document.getElementById("screen");
  var maths = document.getElementById("maths");
  screen.innerHTML = 0;
  maths.innerHTML = "";

  // variables
  var output;
  var screenLen;
  var num = document.querySelectorAll(".num");
  var numVal;
  var divide = document.getElementById("divide");
  var multiply = document.getElementById("multiply");
  var minus = document.getElementById("minus");
  var plus = document.getElementById("plus");
  var percent = document.getElementById("percent");
  var plusMinus = document.getElementById("plusminus");
  var decimal = document.getElementById("decimal");
  var equals = document.getElementById("equals");
  var problemArr = [];
  var problemStr;
  var opClick = false;
  var answer;

  // clear screen
  var clear = document.getElementById("clear");
  clear.addEventListener("click", function() {
    screen.innerHTML = 0;
    maths.innerHTML = "";
    problemStr = "";
  });

  // remove one character (if last, then become 0)
  var backspace = document.getElementById("backspace");
  backspace.addEventListener("click", function() {
    screen.innerHTML = screen.innerHTML.substring(
      0,
      screen.innerHTML.length - 1
    );
    if (screen.innerHTML.length === 0) {
      screen.innerHTML = 0;
    }
  });
  
  // populate screen with numbers
  for (var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function() {
      numVal = this.value;
      // remove leading 0s
      if (screen.innerHTML != 0) {
        if (opClick === true) {
          output = screen.innerHTML = numVal;
          problemArr.push(numVal);
          opClick = false;
        } else {
          output = screen.innerHTML += numVal;
          problemArr.push(numVal);
        }
      } else {
        output = screen.innerHTML = numVal;
        problemArr.push(numVal);
      }
      
      screenLen = output.length;
      // stop numbers from populating screen when there are more than 7
      if (screenLen > 7) {
        screen.innerHTML = 0;
      }
    });
  }

  // operator functions
  divide.addEventListener("click", function() {
    maths.innerHTML = output.concat(" ÷ ");
    problemArr.push(" / ");
    opClick = true;
  });
  multiply.addEventListener("click", function() {
    maths.innerHTML = output.concat(" × ");
    problemArr.push(" * ");
    opClick = true;
  });
  minus.addEventListener("click", function() {
    maths.innerHTML = output.concat(" - ");
    problemArr.push(" - ");
    opClick = true;
  });
  plus.addEventListener("click", function() {
    maths.innerHTML = output.concat(" + ");
    problemArr.push(" + ");
    opClick = true;
  });
  percent.addEventListener("click", function() {
    
  });
  plusMinus.addEventListener("click", function() {
    if (screen.innerHTML != 0) {
      screen.innerHTML = -screen.innerHTML;
    }
  });
  decimal.addEventListener("click", function() {
    
  });
  
  equals.addEventListener("click", function() {
    opClick = true;
    maths.innerHTML = "";
    problemStr = problemArr.join(" ");
    answer = eval(problemStr);
    screen.innerHTML = answer;
    // reset array
    problemArr.length = 0;
    problemStr = "";
  });
});
