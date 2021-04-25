
// typed
let data = [];
$('document').ready(function () {
    let typed = new Typed("#typed ", {
        stringsElement: '#typed-strings',
        typeSpeed: 50,  
        backSpeed: 50,
        loop: true,
        cursorChar: ''
    });
});

// portfolio
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

//active class
$(document).ready(function() {
    $('.navbar-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
})

//Slide blog
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

// Show list menu
let navbarCollapse = document.getElementById('navbar-collapse')
let mobileMenu = document.getElementById('mobile-menu');
let navbarHeight = navbarCollapse.clientHeight;
mobileMenu.onclick = function () {
    var isClosed = navbarCollapse.clientHeight === navbarHeight;
    if (isClosed) {
        navbarCollapse.style.height = '290px';
    } else {
        navbarCollapse.style.height = null;
    }
}
//  Tự động ẩn Menu khi click vào menuItem
var menuItems = document.querySelectorAll('#navbar-mobile li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        navbarCollapse.style.height = null;
    }
}

// show lightbox
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

// user-info
$($('.contact-submit')[0]).click(function(){
    let name= document.getElementById('name');
    let email= document.getElementById('email');
    let subject= document.getElementById('subject');
    let message= document.getElementById('message');
    if (!data) data = [];
    data.push({
        "name" : name.value,
        "email" : email.value,
        "subject" : subject.value,
        "message" : message.value
    });
    const setjson = JSON.stringify(data);
    localStorage.setItem("item", setjson);
    name.value ="";
    email.value = "";
    subject.value ="";
    message.value = "";
}) 
function load() {
    let obj = JSON.parse(localStorage.getItem("item"));
    data = obj;
}

//setting-color
$(".tool-toggler").click(function() {
    $(".tool-wrapper").toggleClass("ani");
})

// change color
let items = document.getElementsByClassName("item-color");
for(let i=0; i<items.length;i++)
{
    let item = items[i];
    item.onclick = function() {
        $(document.body).css("--color",$(item).css("background-color"));
    }
}



//scroll-active
// window.addEventListener('scroll', () => {
//     let navigationLinks = document.querySelectorAll('.navbar-list li a');
//     let fromTop = window.scrollY;
//     navigationLinks.forEach(link => {
//         let section = document.querySelector(link.hash);
//         if (
//             section.offsetTop <= fromTop &&
//             section.offsetTop + section.offsetHeight > fromTop)
//         {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// });
