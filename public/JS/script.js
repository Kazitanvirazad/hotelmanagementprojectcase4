/**
 * author:Kazi tanvir azad
 */

/**
 * creating a reference for the button present in body
 * template
 */
let account = document.getElementById('account');

/**
 * adding an event listener to the button onclick
 */
account.addEventListener('click', goToLoginPage);

let maharaja = document.getElementById('div1');
maharaja.addEventListener('click', goToMaharajaPage);

function goToMaharajaPage() {
    location = 'http://localhost:8088/maharaja';
}

let premium = document.getElementById('div2');
premium.addEventListener('click', goToPremiumPage);

function goToPremiumPage() {
    location = 'http://localhost:8088/premium';
}

let luxury = document.getElementById('div3');
luxury.addEventListener('click', goToLuxuryPage);

function goToLuxuryPage() {
    location = 'http://localhost:8088/luxury';
}

let business = document.getElementById('div4');
business.addEventListener('click', goToBusinessPage);

function goToBusinessPage() {
    location = 'http://localhost:8088/business';
}


let home = document.getElementById('home');
home.addEventListener('click', goToHomePage);

function goToHomePage() {
    console.log("home");
    location = 'http://localhost:8088/';
}


/**
 * function to redirect to the given link
 * by using location property
 */
function goToLoginPage() {
    location = 'http://localhost:8088/account';
}

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        //console.log(document.querySelector('.controls .vid-btn').classList.remove('active'))
        document.querySelector('.controls .active').classList.remove('active');
        //console.log(document.querySelector('.controls .vid-btn').classList)
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        //console.log(document.querySelector('#video-slider'))
        document.getElementById("video-slider").src = src;
        //document.querySelector('#video-slider')
    });
});

