function telephoneCheck() {

    let numberString = document.getElementById("string").value;
    let justDigits = numberString.split(/\D/);
    let digitsLength = justDigits.join("").length;
    let openBracketCount = numberString.split("(").length - 1;
    let closeBracketCount = numberString.split(")").length - 1;
    let checkArray = numberString.split("");
    let firstIndexInArray = checkArray[0];
    let lastIndexInArray = checkArray[numberString.length-1];
    
      if ((firstIndexInArray === "(") && (lastIndexInArray === ")")) {
        document.getElementById("telephone").innerHTML = "Sorry, that's not a valid US telephone number.";
      } else if (checkArray.includes("?")) {
        document.getElementById("telephone").innerHTML = "Sorry, that's not a valid US telephone number.";
      } else if (openBracketCount !== closeBracketCount) {
        document.getElementById("telephone").innerHTML = "Sorry, that's not a valid US telephone number.";
      } else if ((digitsLength < 10) || (digitsLength > 11)) {
        document.getElementById("telephone").innerHTML = "Sorry, that's not a valid US telephone number.";
      } else if ((digitsLength === 11) && (justDigits[0] !== '1')) {
        document.getElementById("telephone").innerHTML = "Sorry, that's not a valid US telephone number.";
      } else {
        document.getElementById("telephone").innerHTML = "Yes, that is a valid US telephone number.";
      }
    }