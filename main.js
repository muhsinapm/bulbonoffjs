function off() {
 
    document.getElementById('myImage').src ="m1-4.png";
  }
  
  
  
  function on() {
   
    document.getElementById('myImage').src ="m2-1.png";
}
  

function Display() {
  var item =document.createElement("li")
  list.appendChild(item);
  item.innerHTML = inputfield.value;
  inputfield.value = "";
}

function Remove() {
 
  var list = document.getElementById("list");
  list.removeChild(list.firstElementChild);
  

}