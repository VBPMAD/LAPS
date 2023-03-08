
function displayCode() {
    
    var valueOne = loader.engine.document.getElementById(105975363).getProperty('value.value');

    switch (valueOne) {
       case "ARGENTINA": valueCode = "54"; break;
case "BOLIVIA":valueCode = "591"; break;
case "BRASIL":valueCode = "55"; break;
case "CHILE":valueCode = "56"; break;
case "ECUADOR":valueCode = "593"; break;
case "NICARAGUA":valueCode = "505"; break;
case "PARAGUAY":valueCode = "595"; break;
case "PERU":valueCode = "51"; break;
case "URUGUAY":valueCode = "598"; break;
default: valueCode = ""; break;
}
   
       loader.engine.document.getElementById(105975371).setValue(({"value": valueCode}));
  }
    
window.onchange = displayCode;
