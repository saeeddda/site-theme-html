"use strict";

var bg_dark = document.querySelectorAll('.dark-background');
var menu_item = document.querySelectorAll('.menu-item');
var mega_menu = document.querySelectorAll('.mega-menu');

menu_item.forEach(function(ele){
    ele.addEventListener("mouseover",function(){
        bg_dark.forEach(function(elem){
            elem.classList.add("active");
        });
    });
    ele.addEventListener("mouseout",function(){
        bg_dark.forEach(function(elem){
            elem.classList.remove("active");
        });
    });
});

mega_menu.forEach(function(ele){
    ele.addEventListener("mouseover",function(){
        bg_dark.forEach(function(elem){
            elem.classList.add("active");
        });
    });
    ele.addEventListener("mouseout",function(){
        bg_dark.forEach(function(elem){
            elem.classList.remove("active");
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
    rtl:true,
    loop:true,
    //margin:10,
    //nav:true,
    mouseDrag:true,
    tuchDrag:true,
    dots:true,
    //autoWidth:true,
    //autoplay:true,
    items:1,
})