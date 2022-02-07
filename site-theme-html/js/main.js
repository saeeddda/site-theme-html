"use strict";

var bg_dark = document.querySelectorAll('body');
var menu_item = document.querySelectorAll('.menu-item');
var mega_menu = document.querySelectorAll('.mega-menu');

menu_item.forEach(function(ele){
    ele.addEventListener("mouseover",function(){
        bg_dark.forEach(function(elem){
            elem.classList.add("page-block");
        });
    });
    ele.addEventListener("mouseout",function(){
        bg_dark.forEach(function(elem){
            elem.classList.remove("page-block");
        });
    });
});

mega_menu.forEach(function(ele){
    ele.addEventListener("mouseover",function(){
        bg_dark.forEach(function(elem){
            elem.classList.add("page-block");
        });
    });
    ele.addEventListener("mouseout",function(){
        bg_dark.forEach(function(elem){
            elem.classList.remove("page-block");
        });
    });
});


var megaMenus = document.querySelectorAll(".mega-submenu");
megaMenus.forEach(function (elements) {
    var mega_menu_target = elements.querySelectorAll('[mega-menu-target]');
    var mega_menu_id = elements.querySelectorAll('[mega-menu-id]');

    if (!!mega_menu_target) {
        mega_menu_target.forEach(function (elem) {
            var megaMenuTarget = elem.getAttribute('mega-menu-target');
            var megaMenuId = elem.closest('li.mega-menu').querySelector('[mega-menu-id="' + megaMenuTarget + '"]');
            elem.addEventListener("mouseover", function () {
                mega_menu_target.forEach(function (ele) {
                    ele.classList.remove("active");
                });
                elem.classList.add("active");
                mega_menu_id.forEach(function (ele) {
                    ele.classList.remove("active");
                });

                if (!!megaMenuId) {
                    megaMenuId.classList.add("active");
                }
            });
        });
    }
}); 

$('.main-slider').owlCarousel({
    rtl:!0,
    loop:1,
    mouseDrag:1,
    tuchDrag:1,
    dots:1,
    autoHeight: !0,
    autoplay:1,
    lazyLoad: !0,
    autoplayTimeout: 5000,
    autoplayHoverPause: !1,
    animateOut: "fadeOut",
    responsive: {0: {items: 1}}
})
$('.category-items').owlCarousel({
    rtl:!0,
    mouseDrag:1,
    tuchDrag:1,
    dots:0,
    items:5,
    margin:10,
    nav:1,
    navText:["<img src=\"img\\RightArrow.svg\">", "<img src=\"img\\LeftArrow.svg\">"],
})
$('.product-items').owlCarousel({
    rtl:!0,
    mouseDrag:1,
    tuchDrag:1,
    dots:0,
    items:6,
    margin:10,
    nav:1,
    navText:["<img src=\"img\\RightArrow.svg\">", "<img src=\"img\\LeftArrow.svg\">"],
})
$('.blog-items').owlCarousel({
    rtl:!0,
    mouseDrag:1,
    tuchDrag:1,
    dots:0,
    items:4,
    margin:10,
    nav:1,
    navText:["<img src=\"img\\RightArrow.svg\">", "<img src=\"img\\LeftArrow.svg\">"],
})
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        delay:{"show":50,"hide":50}
    })
})