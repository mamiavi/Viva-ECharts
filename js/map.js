function mapMain(){
    map = new ol.Map({
        layers: [new ol.layer.Tile({
            source: new ol.source.OSM()
          })],
        view: new ol.View({
        center: ol.proj.fromLonLat([-3.8, 39.5]),
        zoom: 6.1
        }),
        target: 'map'
    });
}