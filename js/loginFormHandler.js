function blink_text() {
    $(".errMsg").fadeOut(300, function () {
        $('.errMsg').fadeIn(300);
    });
}
setInterval(blink_text, 3000);


function loginSubmit() {
    const login = $("#login #loginInput").val();
    const pwd = $("#login #pwdInput").val();
    if (login !== "" && pwd !== "") {
        console.log(login);
        console.log(pwd);
        loginPasswordMatch(login, pwd).done(function (result) {
            console.log(result);
            if (result === 403) {
                $("#loginErrorMsg").text("Invalid login and/or password").show();
            } else if (result === 200) {
                $("#loginErrorMsg").text("").hide();
                // @todo set cookie
                window.location.href='index.html';
            }
        });
    } else {
        $("#loginErrorMsg").text("Login and password are required to log in !").show();
    }
}

