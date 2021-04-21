
$('document').ready(function () {
    let typed = new Typed("#typed ", {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        cursorChar: ''
    });
});

$(document).ready(function() {
    $('.portfolio-list-item').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'All') {
            $('.portfolio-item').show('300');
        } 
        else {
            $('.portfolio-item').not('.' + value).hide('1000');
            $('.portfolio-item').filter('.' + value).show('300');
        }
        $(this).addClass('active1').siblings().removeClass('active1');
    })

  
})

$(document).ready(function() {
    $('.navbar-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: true,
    autoplay:true,
    autoplayTimeout: 2000,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

var navbarMobile = document.getElementById('navbar-mobile');
var mobileMenu = document.getElementById('mobile-menu');
var navbarHeight = navbarMobile.clientHeight;
mobileMenu.onclick = function () {
    var isClosed = navbarMobile.clientHeight === navbarHeight;
    if (isClosed) {
        navbarMobile.style.height = 'auto';
    } else {
        navbarMobile.style.height = null;
    }
}
//  Tự động ẩn Menu khi click vào menuItem
var menuItems = document.querySelectorAll('#navbar-mobile li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        navbarMobile.style.height = null;
    }
}

let portfolioItems = document.getElementsByClassName("portfolio-wrapper");
let lightBoxBtn = document.getElementsByClassName("lightbox");
let closeItems = document.getElementsByClassName("lightbox-link");
for (let i = 0; i < portfolioItems.length; i++) {
    let portfolioItem = portfolioItems[i];
    let item = lightBoxBtn[i];
    let closeItem = closeItems[i];
    portfolioItem.onclick = function () {
        item.style.display = "block";
    }
    closeItem.onclick = function () {
        item.style.display = "none";
    }
}

// from-info
$("#form-info").submit((e) => {
    e.preventDefault();
})

// let obj = {
//     "data" : []
// };
let data = [];
let nam= document.getElementById('name');
let email= document.getElementById('email');
let subject= document.getElementById('subject');
let message= document.getElementById('message');


$('.contact-submit').click(function(){
    data.push({
        "name" : nam.value,
        "email" : email.value,
        "subject" : subject.value,
        "message" : message.value

    });
    const setjson = JSON.stringify(data);
    localStorage.setItem("item", setjson);
    nam.value ="";
    email.value = "";
    subject.value ="";
    message.value = "";
}) 


$(".tool-toggler").click(function() {
    $(".tool-wrapper").toggleClass("ani");
})


function load() {
    let obj = JSON.parse(localStorage.getItem("item"));
    // for (let j = 0; j < obj.length; j++) {
    //     data[j] = obj[j];
    // }
    console.log(obj)
    data = obj;
}
