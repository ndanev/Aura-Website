

// SLIDE MENU FUNCTIONALITY

var openSlideMenu = document.getElementById('open-slide-menu');
var slideMenu = document.getElementById('slide-menu');
var closeBtn = document.getElementById('close-btn');

openSlideMenu.addEventListener('click', function() {
    slideMenu.style.display = "block";
    openSlideMenu.style.display = "none";
});

closeBtn.addEventListener('click', function() {
    slideMenu.style.display = "none";
    openSlideMenu.style.display = "block";
}); 

// GOOGLE MAP
function initMap() {

    var lat = parseFloat('44.7866');
    var lng = parseFloat('20.4489');

    var map = new google.maps.Map(document.getElementById('map'), {

        center: { lat: lat, lng: lng },
        zoom: 10
    });

    var marker = new google.maps.Marker({
        map: map,
        position: { lat: lat, lng: lng },
        title: 'Aura Group'
    });

}


$(document).ready(function () {

    $(window).on('load', function() {

        $('html, body').animate({scrollTop: 0});

    });

    // $('ul.tabs a').on('click', function() {

    //     $('ul.tabs a.active').removeClass('active');
    //     $(this).addClass('active');

    // });

    // functionality for scrolling down 
    $('#arrow-btn').on('click', () => {
        $('html, body').animate({ scrollTop: 810 });
    });

    $('.logo').on('click', () => {
        $('html, body').animate({ scrollTop: 0 });
    });

});



