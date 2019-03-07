
// init google map
function initMap() {

    var lat = parseFloat('44.7866');
    var lng = parseFloat('20.4489');

    var map = new google.maps.Map(document.getElementById('map'), {
        
        center: {lat: lat, lng: lng},
        zoom: 10
    });

    var marker = new google.maps.Marker({
        map: map,
        position: {lat: lat, lng: lng},
        title: 'Aura Group'
    });

}

// functionality for scrilling down 
$('#arrow-btn').on('click', () => {
    $('html, body').animate({scrollTop: 810}, '200');
});