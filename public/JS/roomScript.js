let home = document.getElementById('home');
home.addEventListener('click', goToHomePage);

function goToHomePage() {
    console.log("home");
    location = 'http://localhost:8088/';
}

/**
 * creating a reference for the button present in body
 * template
 */
let account = document.getElementById('account');


/**
 * adding an event listener to the button onclick
 */
 account.addEventListener('click', goToLoginPage);

 
/**
 * function to redirect to the given link
 * by using location property
 */
function goToLoginPage() {
    location = 'http://localhost:8088/account';
}