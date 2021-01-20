function telephoneCheck() {

    let numberString = document.getElementById("string").value;
    let openBracketCount = numberString.split("(").length - 1;
    let closeBracketCount = numberString.split(")").length - 1;
  
    if (openBracketCount !== closeBracketCount) {
      document.getElementById("telephone").innerHTML = "Sorry, that's not a valid US telephone number.";
    } else if (/^(1)?(\s)?(\()?\d{3}(\))?(\s|\-)?\d{3}(\s|\-)?\d{4}$/.test(numberString) == true) {
      document.getElementById("telephone").innerHTML = "Yes, that is a valid US telephone number.";
    } else {
    document.getElementById("telephone").innerHTML = "Sorry, that's not a valid US telephone number.";
    }
  }


  function ukMobileCheck() {

    let numberString = document.getElementById("uk-string").value;
  
    if (/^[0][7][6][2][4](\s)?\d{3}(\s)?\d{3}$/.test(numberString) == true) {
      document.getElementById("mobile").innerHTML = "Yes, that is a valid UK mobile number for the Isle of Man.";
    } else if (/^[0][7][^0|2]\d{2}(\s)?\d{3}(\s)?\d{3}$/.test(numberString) == true) {
      document.getElementById("mobile").innerHTML = "Yes, that is a valid UK mobile number.";
    } else {
      document.getElementById("mobile").innerHTML = "Sorry, that's not a valid UK mobile number.";
    }
  }



