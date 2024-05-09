window.onload = function () {
    // Get the button element
    const loginButton = document.getElementById("loginButton");

    // Add click event listener to the button
    loginButton.addEventListener("click", function() {
        // Redirect to login_page.html
        window.location.href = "login_page.html";
    });
};


