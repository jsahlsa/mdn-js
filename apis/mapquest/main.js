// 1. The basic part of the example
var L;

window.onload = function () {
    L.mapquest.key = '4xqHqOhCQUXD4tUpOFAw9VNjO24hDlGO';
    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('map', {
        center: [44.95, -93.3],
        layers: L.mapquest.tileLayer('hybrid', {
            format: 'png',
            minZoom: 0,
            maxZoom: 20
        }),
        zoom: 11
    });
    map.addControl(L.mapquest.control({ position: 'bottomright' }));

    L.marker([44.95, -93.3], {
        icon: L.mapquest.icons.marker({
            primaryColor: '#22407f',
            secondaryColor: '#3b5998',
            shadow: true,
            size: 'md',
            symbol: 'A'
        })
    })
        .bindPopup('This is Minneapolis!')
        .addTo(map);

}