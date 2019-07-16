$(document).ready(function() {
  if (document.querySelector('#map')) {
    ymaps.ready(init);
    function init() {
      var map = new ymaps.Map('map', {
        center: [53.89292935907454, 27.625864999999997],
        zoom: 7
      });

      $('.map_filter_item_button').click(function (event) {
        event.preventDefault();
        var filter = $(this).text();
        $('.map_filter_item_button.active').removeClass('active');
        $(this).addClass('active');

        switch (filter) {
          case 'Все':
            map.setCenter([53.89292935907454, 27.625864999999997], 7);
            break;
          case 'Минск':
            map.setCenter([53.90341218233496, 27.562049593994132], 12);
            break;
          case 'Брест':
            map.setCenter([52.09024374460796, 23.69595341259759], 12);
            break;
          case 'Витебск':
            map.setCenter([55.18720122079818, 30.20407335449211], 12);
            break;
          case 'Гродно':
            map.setCenter([53.68164751485075, 23.828802216796902], 12);
            break;
          case 'Могилев':
            map.setCenter([53.88157093355596, 30.35010699999996], 12);
            break;
          case 'Гомель':
            map.setCenter([52.42699987141492, 31.017566222656257], 12);
            break;
        }
      });

      var coords = [];
      addresses.forEach(function (item) {
        var item = new ymaps.Placemark(item.coordinates, {
          balloonContent: `<h3>${item.name}</h3><p>${item.description}</p>`
        });
        coords.push(item);
      });
      ymaps.geoQuery(coords).addToMap(map);
    }
  };

  if (document.querySelector('#map-contacts')) {
    ymaps.ready(init);
    function init() {
      var map = new ymaps.Map('map-contacts', {
        center: [53.90341218233496, 27.562049593994132],
        zoom: 12
      });

      var placemark = new ymaps.Placemark(addresses.coordinates, {
        balloonContent: `<h3>${addresses.name}</h3><p>${addresses.description}</p>`
      }, {
        
      });
      map.geoObjects.add(placemark);
    };
  };
});