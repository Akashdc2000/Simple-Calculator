let string = "";
var ud;
let buttons = document.querySelectorAll('.button');
function setString() {
  string = document.getElementById('input1').value;
  console.log(string);
}
console.log(string);
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      if(string==ud)
        document.querySelector('input').value = '0';
      else
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})