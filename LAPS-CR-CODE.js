
function displayCode() {
    
    var valueOne = loader.engine.document.getElementById(97763824).getProperty('value.value');

    switch (valueOne) {
       case "ANTIGUA": valueCode = "1"; break;
       case "ARUBA":valueCode = "297"; break;
case "BAHAMAS":valueCode = "1"; break;
case "BARBADOS":valueCode = "1"; break;
case "CAYMAN ISLANDS":valueCode = "1"; break;
case "CURASAO":valueCode = "599"; break;
case "GRENADA":valueCode = "1"; break;
case "HAITI":valueCode = "509"; break;
case "JAMAICA":valueCode = "1"; break;
case "ST. MAARTEN":valueCode = "599"; break;
case "SURINAME":valueCode = "597"; break;
case "TRINIDAD & TOBAGO":valueCode = "868"; break;
default: valueCode = ""; break;
}


       loader.engine.document.getElementById(97763832).setValue(({"value": valueCode}));
  }
    
window.onchange = displayCode;
