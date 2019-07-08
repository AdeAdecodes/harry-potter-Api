var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.id='harry'
defaultOption.text = 'Choose house';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const key = '$2a$10$LRlkfHA/dy9Od7jWbK6yTusdmuzjVvxj8LDusiAYB.DdVHnoWcHS.';
const url = new URL('https://www.potterapi.com/v1/houses/'), params = {key: key,}

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))


 
fetch(url, {key: key})  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
        console.log(data);
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.id = data[i].id;
          dropdown.add(option);
      }    
      
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });       

  const getIndex = () => {
 
    let val= document.getElementById("locality-dropdown").value;
    let dropdown = document.getElementById('charaters');
   dropdown.length = 0;
   
   let defaultOption = document.createElement('option');
   defaultOption.text = 'Choose charaters';
   dropdown.add(defaultOption);
   dropdown.selectedIndex = 0;
   
   const key = '$2a$10$LRlkfHA/dy9Od7jWbK6yTusdmuzjVvxj8LDusiAYB.DdVHnoWcHS.';
   const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house: `${val}`}
   
   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
   
   
    
   fetch(url, {key: key})  
     .then(  
       function(response) {  
         if (response.status !== 200) {  
           console.warn('Looks like there was a problem. Status Code: ' + 
             response.status);  
           return;  
         }
   
         // Examine the text in the response  
         response.json().then(function(data) {  
           let option;
           console.log(data);
         for (let i = 0; i < data.length; i++) {
             option = document.createElement('option');
             option.text = data[i].name;
             option.id = data[i].id;
             dropdown.add(option);
         }    
         
         });  
       }  
     )  
     .catch(function(err) {  
       console.error('Fetch Error -', err);  
     });       
   
    
   };
   const getSpell = () => {
 
    document.getElementById("charaters").value;
    let dropdown = document.getElementById('spells');
   dropdown.length = 0;
   
   let defaultOption = document.createElement('option');
   defaultOption.text = 'Choose spells';
   dropdown.add(defaultOption);
   dropdown.selectedIndex = 0;
   
   const key = '$2a$10$LRlkfHA/dy9Od7jWbK6yTusdmuzjVvxj8LDusiAYB.DdVHnoWcHS.';
   const url = new URL('https://www.potterapi.com/v1/spells'), params = {key: key,}
   
   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
   
   
    
   fetch(url, {key: key})  
     .then(  
       function(response) {  
         if (response.status !== 200) {  
           console.warn('Looks like there was a problem. Status Code: ' + 
             response.status);  
           return;  
         }
   
         // Examine the text in the response  
         response.json().then(function(data) {  
           let option;
           console.log(data);
         for (let i = 0; i < data.length; i++) {
             option = document.createElement('option');
             option.text = data[i].spell;
             option.id = data[i].id;
             dropdown.add(option);
         }    
         
         });  
       }  
     )  
     .catch(function(err) {  
       console.error('Fetch Error -', err);  
     });       
   
    
   };
   