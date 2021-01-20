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