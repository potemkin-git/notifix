
// Call to WS checking if login exists
function isLoginUsed(login) {
    return new Promise(function (resolve, reject) {
        // Ajax login validation check
    });
}

// Call to WS checking if login matches provided password
function loginPasswordMatch(login, pwd) {
    return new Promise(function (resolve, reject) {
        // Ajax login/pwd correspondance check
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}