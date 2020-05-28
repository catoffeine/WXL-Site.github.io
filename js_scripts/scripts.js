let owl = $('.owl-carousel');
let slider__button = document.querySelector('.slider__btn');
let slider__buttons = document.querySelector('.slider__buttons');
let carousel;
let hamburger_active = document.querySelector('.hamburger'),
    header_nav = document.querySelector('.header_nav'),
    header_nav_links = document.querySelectorAll('.header_nav a');
let latest_nav = document.querySelector('.latest_nav');
    latest_nav_item = document.querySelectorAll('.latest_nav_item');
let item_slider_posts = document.querySelectorAll(".item_sliderposts"),
    active_slide_posts = document.querySelectorAll(".active_slide_posts"),
    left_arrow_posts = document.querySelector(".left_arrow-posts"),
    right_arrow_posts = document.querySelector(".right_arrow-posts"),
    slider_posts = document.querySelector(".slider_posts");


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        callbacks: true,
        autoWidth: false,
        responsiveBaseWidth: '#header_slider',
        onDragged: callback,
    })
});

function callback(event) {
    item = event.item.index;
}

$('.owl-carousel').on('click', '.owl-item', function(e) {
    carousel = $('.owl-carousel').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()));
});

$('.right_slider').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.left_slider').click(function() {
    owl.trigger('prev.owl.carousel');
})





slider__buttons.onclick = function(event) {
    let target = event.target;
    let slider_btns = document.querySelectorAll('.slider__btn');
    if (target.className != 'slider__btn') {
        return;
    }
    for (let i = 0;i<slider_btns.length;i++) {
        if (slider_btns[i].classList.contains('dot__active')) {
            slider_btns[i].classList.remove('dot__active');
        }
    }
   
    target.classList.add("dot__active");
}


function open_headerNav() {
    if (document.getElementById("menu_id").style.width == "") {
        document.getElementById("menu_id").style.width = "250px";
    } else {
        document.getElementById("menu_id").style.width = "";
    }
  }

latest_nav.onclick = function(event) {
    let target = event.target;
    if (target.className != "latest_nav_item") {
        return;
    }
    for (let i = 0; i < latest_nav_item.length;i++) {
        if (latest_nav_item[i].classList.contains('active_lat_item')) {
            latest_nav_item[i].classList.remove('active_lat_item');
        }
    }

    target.classList.add('active_lat_item');
}

for(let i=0;i<active_slide_posts.length;i++) {
    active_slide_posts[i].style.left = 0;
}

for(let i=0;i<active_slide_posts.length;i++) {
    active_slide_posts[i].style.right = 0;
}

left_arrow_posts.style.pointerEvents = "none"
count_slider_posts = 8; //Сейчас 6 слайдов, если будет +1 слайд писать count_slider_posts = 4 + (4*кол-во прибавленных слайдов), если булет на 1 слайд меньше то писать count_slider_posts = 4 - (4*кол-во прибавленных слайдов)


right_arrow_posts.onclick = function() {
    left_arrow_posts.style.pointerEvents = "auto";
    for (let i=0;i<active_slide_posts.length;i++) {
        if (active_slide_posts[i].style.left == "") {
            active_slide_posts[i].style.left = 0;
        }
        if (active_slide_posts[i].style.left == "-" + (count_slider_posts*100) + "px") {
            right_arrow_posts.style.pointerEvents = "none"
        }else {
            right_arrow_posts.style.pointerEvents = "auto"
        }
        active_slide_posts[i].style.left = (parseInt(active_slide_posts[i].style.left) - 400) + "px"
    }
}

left_arrow_posts.onclick = function() {
    right_arrow_posts.style.pointerEvents = "auto";
    for (let i=0;i<active_slide_posts.length;i++) {
        if (active_slide_posts[i].style.left == "") {
            active_slide_posts[i].style.left = 0;
        }
        if (active_slide_posts[i].style.left == "-400px") {
            left_arrow_posts.style.pointerEvents = "none"
        }else {
            left_arrow_posts.style.pointerEvents = "auto"
        }
        active_slide_posts[i].style.left = (parseInt(active_slide_posts[i].style.left) + 400) + "px"
    }
}


// $('.slider_btn').click(function() {
//     owl.trigger('to.owl.carousel', [aa, 300]);
// })






