var userName = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, messege){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerHTML =messege
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerHTML =''
}
function emptyEror(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        EmpInput = input.value.trim();
        if(!EmpInput){
            isEmptyError = true;
            showError(input, 'Khong duoc de trong');
        }else{
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email is not valid')
	}
}

function checkLengthError(input, min, max){
    input.value = input.value.trim();
    if(input.value.length < min){
        showError(input, `Length must be greater than or equal to ${min}`);
        return true;
    }
    if(input.value.length > max){
        showError(input, `Length must be less than or equal to ${max}`);
        return true;
    }
    showSuccess(input);
    return false;
}

function checkMatchPass(password, confirmPassword){
    if(password.value !== confirmPassword.value){
        showError(confirmPassword, 'Password do not match');
        return true;
    }
    return false;
}
// showError(userName, 'Loi')
// showSuccess(userName)
form.addEventListener('submit',function(e){
    e.preventDefault();
    let isEmptyError = emptyEror([userName, email, password, confirmPassword])
    let isEmailError = checkEmail(email);
    let isUserNameLengthError = checkLengthError(userName,3, 10 )
    let isPassWordLengthError = checkLengthError(password,8, 20 )
    let isMatchPass = checkMatchPass(password,confirmPassword );
})