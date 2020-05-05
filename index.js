const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const warning = document.querySelectorAll('.warning-txt');
const tick = document.querySelectorAll('.tick');
const cross = document.querySelectorAll('.cross');
const p = document.getElementsByTagName('p');

// regex 
const validName = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
const validEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6})$/;
const validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
const validNumber = /^([+]?\d{1,3}[-\s]?|)\d{2}[-\s]?\d{3}[-\s]?\d{4}$/;

// btn 
btn.addEventListener('click', () => {
  // first name  
  if(firstName.value.match(validName)) {
    firstName.style.border = '3px double green';
    firstName.style.borderRadius = '10px';
    tick[0].style.display = 'block';
    cross[0].style.display = 'none';
    warning[0].style.display = 'none';
  } else {
    warning[0].style.display = 'block';
    firstName.style.border = '3px double rgb(241, 24, 144)';
    firstName.style.borderRadius = '10px';
    cross[0].style.display = 'block';
    tick[0].style.display = 'none';
  }

  // second name  
  if(secondName.value.match(validName)) {
    secondName.style.border = '3px double green';
    secondName.style.borderRadius = '10px';
    tick[1].style.display = 'block';
    cross[1].style.display = 'none';
    warning[1].style.display = 'none';
  } else {
    warning[1].style.display = 'block';
    secondName.style.border = '3px double rgb(241, 24, 144)';
    secondName.style.borderRadius = '10px';
    cross[1].style.display = 'block';
    tick[1].style.display = 'none';
  }

  //  email
  if (email.value.match(validEmail)) {
    email.style.border = '3px double green';
    email.style.borderRadius = '10px';
    tick[2].style.display = 'block';
    cross[2].style.display = 'none';
    warning[2].style.display = 'none';
  } else {
    warning[2].style.display = 'block';
    email.style.border = '3px double rgb(241, 24, 144)';
    email.style.borderRadius = '10px';
    cross[2].style.display = 'block';
    tick[2].style.display = 'none';
  };

  //  number
  if (number.value.match(validNumber)) {
    number.style.border = '3px double green';
    number.style.borderRadius = '10px';
    tick[3].style.display = 'block';
    cross[3].style.display = 'none';
    warning[3].style.display = 'none';
  } else {
    warning[3].style.display = 'block';
    number.style.border = '3px double rgb(241, 24, 144)';
    number.style.borderRadius = '10px';
    cross[3].style.display = 'block';
    tick[3].style.display = 'none';
  };

  //  password
  if (password.value.match(validPassword)) {
    password.style.border = '3px double green';
    password.style.borderRadius = '10px';
    tick[4].style.display = 'block';
    cross[4].style.display = 'none';
    warning[4].style.display = 'none';
  } else {
    warning[4].style.display = 'block';
    password.style.border = '3px double rgb(241, 24, 144)';
    password.style.borderRadius = '10px';
    cross[4].style.display = 'block';
    tick[4].style.display = 'none';
  };
});


firstName.addEventListener('input', (e) => {
  e.target.value != 0 ? p[0].style.display = 'block': p[0].style.display = 'none';
})

secondName.addEventListener('input', (e) => {
  e.target.value != 0 ? p[1].style.display = 'block': p[1].style.display = 'none';
})

email.addEventListener('input', (e) => {
  e.target.value != 0 ? p[2].style.display = 'block': p[2].style.display = 'none';
})

number.addEventListener('input', (e) => {
  e.target.value != 0 ? p[3].style.display = 'block': p[3].style.display = 'none';
})

password.addEventListener('input', (e) => {
  e.target.value != 0 ? p[4].style.display = 'block': p[4].style.display = 'none';
})

