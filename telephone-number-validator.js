function telephoneCheck(str) {
    let justDigits = str.split(/\D/);
    let digitsLength = justDigits.join("").length;
    let openBracketCount = str.split("(").length - 1;
    let closeBracketCount = str.split(")").length - 1;
    let checkArray = str.split("");
    let firstIndexInArray = checkArray[0];
    let lastIndexInArray = checkArray[str.length-1];
    
      if ((firstIndexInArray === '(') && (lastIndexInArray === ')')) {
        return false;
      } else if (checkArray.includes('?')) {
        return false;
      } else if (openBracketCount !== closeBracketCount) {
        return false;
      } else if ((digitsLength < 10) || (digitsLength > 11)) {
        return false;
      } else if ((digitsLength === 11) && (justDigits[0] !== '1')) {
        return false;
      }
    
      return true;
    }
    
    console.log(telephoneCheck("(555)5(55?)-5555"));