let string = "";

let buttons = document.querySelectorAll('.button');


function setString() {
  string += document.getElementById('input').value;
  // console.log(string);
}
// console.log(string);


Array.from(buttons).forEach((button) => {

  button.addEventListener('click', (e) => {

    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        if (string == undefined)
          document.querySelector('input').value = '0';
        else
          document.querySelector('input').value = string;
      }
      catch (error) {
        string = "Syntax Error";
        document.querySelector('input').value = string;
      }

    }

    else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML == '%') {
      string = string + e.target.innerHTML;
      size = string.length;
      n = Number(string.substring(0, size - 1));
      document.querySelector('input').value = n / 100;
    }

    else {
      // console.log(e.target.innerHTML)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})