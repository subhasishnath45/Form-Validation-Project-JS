
// error elements
const usernameError = document.querySelector('#username_error');
const emailError = document.querySelector('#email_error');
const passwordError = document.querySelector('#password_error');
const cpasswordError = document.querySelector('#cpassword_error');

// hide all error elements by default.
usernameError.style.display = 'none';
emailError.style.display = 'none';
passwordError.style.display = 'none';
cpasswordError.style.display = 'none';

function validate(e){
    // e.preventDefault();
    // input elements
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector('#cpassword');

    // input values
    const usernameVal = document.querySelector('#username').value;
    const emailVal = document.querySelector('#email').value;
    const passwordVal = document.querySelector('#password').value;
    const cpasswordVal = document.querySelector('#cpassword').value;

    // console.log(usernameVal, emailVal, passwordVal, cpasswordVal);

    const returnedVal = (
        checkusername(usernameVal) && 
        checkemail(emailVal) && 
        checkpassword(passwordVal) && 
        checkpasswordmatch(passwordVal, cpasswordVal)
    );
    if(returnedVal){
        return (
            checkusername(usernameVal) && 
            checkemail(emailVal) && 
            checkpassword(passwordVal) && 
            checkpasswordmatch(passwordVal, cpasswordVal)
        );
    }else{
        e.preventDefault();
    }


    // checkemail(emailVal);
    // checkpassword(passwordVal);
    // checkpasswordmatch(passwordVal, cpasswordVal);
}


const checkusername = (usernameVal)=> {
    if(usernameVal.length > 3){
        // hide the error message element.
        usernameError.style.display = 'none';
        // toggling success and error classes
        if(username.classList.contains('error')){
            // console.log('replaced error class with success');
            username.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            username.classList.add('success');
        }

        // allowing only alpha numeric characters, dot and underscore in username.
        let expr = /^[a-zA-Z0-9._]*$/;
        // If username doesn't match the regular expression.
        if(!expr.test(usernameVal)){
            username.focus();
            // toggling success and error classes
            if(username.classList.contains('success')){
                // console.log('replaced success class with error');
                username.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                username.classList.add('error')
            }
            // showing error message element and the error message
            usernameError.style.display = 'block';
            usernameError.innerText = 'Username can only contain Alphanumeric characters, . and _';
            return false;
        }
        return true;
    }else{
        username.focus();
        if(username.classList.contains('success')){
            // console.log('replaced success class with error');
            username.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            username.classList.add('error')
        }
        // showing error message element and the error message
        usernameError.style.display = 'block';
        usernameError.innerText = 'Username must be of atleast 4 characters.';
        return false;
    }
}

const checkemail = (emailVal) =>{
    if(emailVal.length > 8){
        // hide the error message element.
        emailError.style.display = 'none';
        // toggling success and error classes
        if(email.classList.contains('error')){
            // console.log('replaced error class with success');
            email.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            email.classList.add('success');
        }

        // checking for valid email format.
        /**
        / = Begin and end of an expression
        ^ start of string
        $ end of string
        i = test the string in a case insensitive manner
        \w = another word
        + = match previous expression at least once, unlimited number of times
        () = another group to treat as expression.
        [] = another character set. match any character inside the brackets, but only match one
        \. = Match the literal .
        – = match a literal –
        Optional character( ? ) = This symbol tells the computer that the preceding character may or may not be present in the string to be matched.
        * = match the previous expression zero or infinite times
        @ = match a literal @ symbol(@ before domain name)
        {2,3} = match word at least 2 times but no more than 3 times (at max three characters)
        i = test the string in a case insensitive manner
         */
        let emailfilterexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        if(!emailfilterexp.test(emailVal)){
            email.focus();
            // toggling success and error classes
            if(email.classList.contains('success')){
                // console.log('replaced success class with error');
                email.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                email.classList.add('error')
            }
            // showing error message element and the error message
            emailError.style.display = 'block';
            emailError.innerText = 'Please enter a valid email address!';
            return false;
        }
        return true;
    }else{
        email.focus();
        if(email.classList.contains('success')){
            // console.log('replaced success class with error');
            email.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            email.classList.add('error')
        }
        // showing error message element and the error message
        emailError.style.display = 'block';
        emailError.innerText = 'Email must be of atleast 8 characters.';
        return false;
    }
}

const checkpassword = (passwordVal)=>{
    if(passwordVal.length > 6){
        // hide the error message element.
        passwordError.style.display = 'none';
        // toggling success and error classes
        if(password.classList.contains('error')){
            // console.log('replaced error class with success');
            password.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            password.classList.add('success');
        }
        
        /**
        checking for a valid password

        (?=.*[0-9]) - Assert a string has at least one number;
        (?=.*[!@#$%^&*]) - Assert a string has at least one special character.

         */
        var passwordfilterexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!passwordfilterexp.test(passwordVal)){
            password.focus();
            // toggling success and error classes
            if(password.classList.contains('success')){
                // console.log('replaced success class with error');
                password.classList.replace('success', 'error');
            }else{
                // console.log('added class error');
                password.classList.add('error')
            }
            // showing error message element and the error message
            passwordError.style.display = 'block';
            passwordError.innerText = 'Please enter a valid password that has at least one number and at least one special character!';
            return false;
        }
        return true;
    }else{
        password.focus();
        if(password.classList.contains('success')){
            // console.log('replaced success class with error');
            password.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            password.classList.add('error')
        }
        // showing error message element and the error message
        passwordError.style.display = 'block';
        passwordError.innerText = 'Password must be of atleast 6 characters.';
        return false;
    }

}

const checkpasswordmatch = (passwordVal, cpasswordVal)=>{
    if(passwordVal === cpasswordVal && passwordVal != ''){
        // hide the error message element.
        cpasswordError.style.display = 'none';
        // toggling success and error classes
        if(cpassword.classList.contains('error')){
            // console.log('replaced error class with success');
            cpassword.classList.replace('error', 'success');  
        }else{
            // console.log('added class success');
            cpassword.classList.add('success');
        }
        return true;
    }else{
        cpassword.focus();
        if(cpassword.classList.contains('success')){
            // console.log('replaced success class with error');
            cpassword.classList.replace('success', 'error');
        }else{
            // console.log('added class error');
            cpassword.classList.add('error')
        }
        // showing error message element and the error message
        cpasswordError.style.display = 'block';
        cpasswordError.innerText = 'Password and Confirm Password doesn\'t match.';
        return false;
    }
}