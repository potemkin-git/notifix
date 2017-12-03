function blink_text() {
    $(".errMsg").fadeOut(300, function () {
        $('.errMsg').fadeIn(300);
    });
}
setInterval(blink_text, 3000);


$("#login form").submit(function (event) {
    const login = $("#login form input[type=text]").val();
    const pwd = $("#login form input[type=password]").val();
    let allowed = false;
    let msgError = "";

    if (login != "" && pwd != "") {

        isLoginUsed(login).then(function (result) {
            if (result == "404") {
                $("#loginErrorMsg").text("We did not find your login in our database").show();
            } else {
                loginPasswordMatch(login, pwd).then(function (result) {
                    if (result == "403") {
                        $("#loginErrorMsg").text("Provided password does not match login").show();
                    } else {
                        allowed = true;
                       // @todo set cookie
                    }
                }).catch(function (err) {
                    console.error('Error:' + err);
                });
            }
        }).catch(function (err) {
            console.error('Error:' + err);
        });
    } else {
        $("#loginErrorMsg").text("Login and password are required to log in !").show();
    }

    if (!allowed) event.preventDefault();
});

