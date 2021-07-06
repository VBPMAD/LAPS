
function displayCode() {
    
    var valueOne = loader.engine.document.getElementById(97744486).getProperty('value.value');

    switch (valueOne) {
       case "ANTIGUA": valueCode = "1"; break;
       case "ARGENTINA": valueCode = "54"; break;
case "ARUBA":valueCode = "297"; break;
case "BAHAMAS":valueCode = "1"; break;
case "BOLIVIA":valueCode = "591"; break;
case "BRASIL":valueCode = "55"; break;
case "CAYMAN ISLANDS":valueCode = "1"; break;
case "COLOMBIA":valueCode = "57"; break;
case "COSTA RICA":valueCode = "506"; break;
case "CURASAO":valueCode = "599"; break;
case "CHILE":valueCode = "56"; break;
case "ECUADOR":valueCode = "593"; break;
case "EL SALVADOR":valueCode = "503"; break;
case "GUATEMALA":valueCode = "502"; break;
case "HONDURAS":valueCode = "504"; break;
case "HAITI":valueCode = "509"; break;
case "NICARAGUA":valueCode = "505"; break;
case "PANAMA":valueCode = "507"; break;
case "PARAGUAY":valueCode = "595"; break;
case "PERU":valueCode = "51"; break;
case "PUERTO RICO":valueCode = "1"; break;
case "REPUBLICA DOMINICANA":valueCode = "809"; break;
case "SURINAME":valueCode = "597"; break;
case "TRINIDAD & TOBAGO":valueCode = "868"; break;
case "URUGUAY":valueCode = "598"; break;
default: valueCode = ""; break;
}

   valueCode ="455";
       loader.engine.document.getElementById("text-00000018").setValue(({"value": valueCode}));
  }
    
window.onchange = displayCode;
