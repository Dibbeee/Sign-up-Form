
document.querySelector('.submitBtn').onclick = function() {
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelector('.confirmPassword').value;
    const validatePass = document.querySelector('.validatePass');
    const validateConfirmPass = document.querySelector('.validateConfirmPass');
    

    if(password === ''){
        alert('Please enter your password');
    }else if(confirmPassword === ''){
        alert('Please confirm your password.');
    }else if(password!== confirmPassword){
        validatePass.textContent = 'Passwords do not match!';
        validateConfirmPass.textContent = 'Passwords do not match!';
        return false;
    }else if(password === confirmPassword){
        alert('Passwords match.');
        return true;
    }
}

