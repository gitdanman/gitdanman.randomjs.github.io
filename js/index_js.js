var input = document.querySelector('.userNumber');
var para = document.querySelector('p');

// squares users number
function squared(num) {
  return num * num;
}

// cubes users number
function cubed(num) {
  return num * num * num;
}

// returns the factorial of the user's number
function factorial(num) {
  var x = num;
  while (x > 1) {
    num *= x-1;
    x--;
  }
  return num;
}

// returns the circumference if the user's number is the radius
function circum(num) {
  return 2 * Math.PI * num;
}

// returns the square root of the user's number
function sqrt(num) {
  return Math.sqrt(num);
}

// writes all the functions out and checks if user input is a number
input.onchange = function() {
  var num = input.value;

  if (isNaN(num)) {
    para.textContent = 'Try entering a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '. ' +
                       num + ' circumference based on radius is ' + circum(num) + '. ' +
                       num + ' square root is ' + sqrt(num) + '.';
  }
}
