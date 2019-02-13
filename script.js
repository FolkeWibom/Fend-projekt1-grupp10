/*NAVBAR!!!!!!!!!! */



/* Öppnar Dropdown listorna och stänger andra öppnade*/
function dropDownFuncHtml() {
  document.getElementById("myDropdownHTML").classList.toggle("show");

  let dropCss = document.getElementById("myDropdownCSS");
  let dropJs = document.getElementById("myDropdownJS");
  let dropPs = document.getElementById("myDropdownPS");
  let dropArr = [dropCss, dropJs, dropPs];
  for (let i = 0; i < dropArr.length; i++) {
    let closeDrop = dropArr[i];
    if (closeDrop.classList.toggle("show")) {
      closeDrop.classList.remove('show');
    }
  }
}

function dropDownfuncCSS() {
  document.getElementById("myDropdownCSS").classList.toggle("show");

  let dropHtml = document.getElementById("myDropdownHTML");
  let dropJs = document.getElementById("myDropdownJS");
  let dropPs = document.getElementById("myDropdownPS");
  let dropArr = [dropHtml, dropJs, dropPs];
  for (let i = 0; i < dropArr.length; i++) {
    let closeDrop = dropArr[i];
    if (closeDrop.classList.toggle("show")) {
      closeDrop.classList.remove('show');
    }
  }
}

function dropDownfuncJS() {
  document.getElementById("myDropdownJS").classList.toggle("show");

  let dropCss = document.getElementById("myDropdownCSS");
  let dropHtml = document.getElementById("myDropdownHTML");
  let dropPs = document.getElementById("myDropdownPS");
  let dropArr = [dropCss, dropHtml, dropPs];
  for (let i = 0; i < dropArr.length; i++) {
    let closeDrop = dropArr[i];
    if (closeDrop.classList.toggle("show")) {
      closeDrop.classList.remove('show');
    }
  }
}

function dropDownfuncPS() {
  document.getElementById("myDropdownPS").classList.toggle("show");

  let dropCss = document.getElementById("myDropdownCSS");
  let dropJs = document.getElementById("myDropdownJS");
  let dropHtml = document.getElementById("myDropdownHTML");
  let dropArr = [dropCss, dropJs, dropHtml];
  for (let i = 0; i < dropArr.length; i++) {
    let closeDrop = dropArr[i];
    if (closeDrop.classList.toggle("show")) {
      closeDrop.classList.remove('show');
    }
  }
}

function closeDropDown() {
  let dropdowns = document.getElementsByClassName("dropdown-content");

  for (let i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

// SÖKFUNKTIONEN!!!!!!!!!!!!!!!!!!!!!!

/*Funktion som triggas när man är i inputfältet med id inputSearch*/
function searchFunction() {
  /*Sparar texten man skrivit i inputfältet i en variabel*/
  let inputSearch = document.getElementById('inputSearch').value;
  /* Array med med a-taggarna i listan*/
  let arr = [document.getElementById('start'), document.getElementById('html'), document.getElementById('css'),
  document.getElementById('javascript'), document.getElementById('photoshop'), document.getElementById('script-taggen'),
   document.getElementById('variabler'), document.getElementById('dom'), document.getElementById('funktioner'),
    document.getElementById('loopar'), document.getElementById('navigationsbar'), document.getElementById('sökfält'),
     document.getElementById('arrayer'), document.getElementById('intro'), document.getElementById('head'),
      document.getElementById('header'),document.getElementById('semanticElements'), document.getElementById('innehåll'),
      document.getElementById('footer'), document.getElementById('summering'), document.getElementById('bildoptimering'),
      document.getElementById('kvalitet'), document.getElementById('storlek'), document.getElementById('filtyper'),
       document.getElementById('selektorer'), document.getElementById('styling'), document.getElementById('boxmodellen'),
        document.getElementById('position'), document.getElementById('positionering'), document.getElementById('data')];
  /*Loopar igenom arrayen för att se om inputSearch variabeln matchar något index i arrayen */
  for (let i = 0; i < arr.length; i++) {

    /*Om de matchar ska länkens href attributet kopieras över till sökknappens href attribut*/
     if (inputSearch == arr[i].id) {
      let link = arr[i];
      document.getElementById('searchBtn').href = link;
    }
  }
}

