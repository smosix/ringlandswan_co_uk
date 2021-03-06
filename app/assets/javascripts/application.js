// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require ckeditor/init
//= require_tree .

$(function () {

    $('#slides').slidesjs({
        navigation: {
            active: false
        },
        pagination: {
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 800
            }
        },
        play: {
            effect: "fade",
            interval: 5000,
            auto: true,
            swap: true,
            pauseOnHover: false,
            restartDelay: 2500
        }
    });

    $(function() {
        $('.datepicker').datepicker({
            dateFormat: "dd-mm-yy"
        });
    });

    $('#menu_toggle').on('click', function () {
        $('html').toggleClass('menu_open')
    })

    $('#main_menu a').on('click', function () {
        $('html').removeClass('menu_open')
    })

});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 140) {
        //clearHeader, not clearheader - caps H
        $("html").addClass("header_scrolled");
    } else {
        $("html").removeClass("header_scrolled");
    }
}); //missing );