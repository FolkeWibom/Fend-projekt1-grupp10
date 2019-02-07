  /*NAVBAR!!!!!!!!!! */
  /* Öppna Dropdown listorna*/
function dropDownFuncHtml() {
  document.getElementById("myDropdownHTML").classList.toggle("show");
  }
  function dropDownfuncCSS(){
    document.getElementById("myDropdownCSS").classList.toggle("show");
  }
  function dropDownfuncJS(){
    document.getElementById("myDropdownJS").classList.toggle("show");
  }
  function dropDownfuncPS(){
    document.getElementById("myDropdownPS").classList.toggle("show");
  }
  
  // Stänger dropdown listan om användaren klickar utanför den.
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // SÖKFUNKTIONEN!!!!!!!!!!!!!!!!!!!!!!

          /*Funktion som triggas när man är i inputfältet med id inputSearch*/
          function searchFunction(){
            /*Sparar texten man skrivit i inputfältet i en variabel*/
            let inputSearch = document.getElementById('inputSearch').value;
            /* Array med med a-taggarna i listan*/
            let arr = [document.getElementById('start'), document.getElementById('html'), document.getElementById('css'),
            document.getElementById('javascript'), document.getElementById('photoshop')];
            /*Loopar igenom arrayen för att se om inputSearch variabeln matchar något index i arrayen */
                 for (let i = 0; i < arr.length; i++) {   
                     
            /*Om de matchar ska länkens href attributet kopieras över till sökknappens href attribut*/         
                if (inputSearch == arr[i].id) {
                let link = arr[i];
                document.getElementById('searchBtn').href = link; 
                }
            }  
        }