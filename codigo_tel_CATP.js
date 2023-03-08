
function displayCode() {
    
    var valueOne = loader.engine.document.getElementById(105727742).getProperty('value.value');

    switch (valueOne) {
case "COSTA RICA":valueCode = "506"; break;
case "EL SALVADOR":valueCode = "503"; break;
case "GUATEMALA":valueCode = "502"; break;
case "NICARAGUA":valueCode = "505"; break;
case "PANAMA":valueCode = "507"; break;
case "REPUBLICA DOMINICANA":valueCode = "809"; break;
case "HONDURAS":valueCode = "504"; break;
default: valueCode = ""; break;
}
   
       loader.engine.document.getElementById(105727750).setValue(({"value": valueCode}));
  }
    
window.onchange = displayCode;