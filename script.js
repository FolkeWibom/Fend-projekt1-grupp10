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
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }