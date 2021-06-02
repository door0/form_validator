const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error messages : 실패시 색깔, 에러메시지 보여주기
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText= message;
}

// Show success outline : 성공시 색깔 바꿔주기
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valild : 이메일 정규식 사용하기
// function isValidEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) { //trim은 공백제거
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields : 반복문 사용하기 
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    console.log(input.value);

    if(input.value.trim() === '') {
      //showError(input, `${input.id} is required`);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input, )
    }
  }); 
}

// Check input length : 사용자 명과 이메일 최소 최대 길이 메시지 지정해주기
function checkLength(input, min, max){
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
  } else {
    showSuccess(input);
  }
}

// Check passwords match : 비밀번호 두개 일치하는지 확인하기 
function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value ) {
    showError(input2, 'Password do not match');
  } 
}
 
// Get fieldName : 첫글자만 대문자로 가져오기
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners : 제출했을 때
form.addEventListener('submit', function(e) { 
  e.preventDefault();

  //console.log(username.value); // clg 해서 나오는지 확인하기

  // if(username.value === '') {
  //   showError(username, 'Username is required');
  // } else {
  //   showSuccess(username);
  // }


  // if(email.value === '') {
  //   showError(email, 'Email is required');
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, 'Email is not valid');
  // } else {
  //   showSuccess(email);
  // }


  // if(password.value === '') {
  //   showError(password, 'Password is required');
  // } else {
  //   showSuccess(password);
  // }


  // if(password2.value === '') {
  //   showError(password2, 'Password 2 is required');
  // } else {
  //   showSuccess(password2);
  // }

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);

});