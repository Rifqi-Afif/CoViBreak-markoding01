const mocksCityMap = {
  Aceh: {
    center: { lat: 106.816666, lng: -6.200 },
    population: 28547,
    contentString: 'Aceh Total Kasus 28.547',
  },
  "Sumatra Utara": {
    center: { lat: 2.1153547, lng: 99.5450974 },
    population: 84273,
    contentString: 'Sumatra Utara Total Kasus 84.273',
  },
  "Sumatra Barat": {
    center: { lat: -0.7399397, lng: 100.8000051 },
    population: 82738,
    contentString: 'Sumatra Barat Total Kasus 82.738',
  },
  Riau: {
    center: { lat: 0.2933469, lng: 101.7068294 },
    population: 116792,
    contentString: 'Riau Total Kasus 116.792',
  },
  Jambi: {
    center: { lat: -1.61157, lng: 102.7797 },
    population: 25727,
    contentString: 'Jambi Total Kasus 25.727',
  },
  "Sumatra Selatan": {
    center: { lat: -3.12668, lng: 104.09306 },
    population: 55545,
    contentString: 'Sumatra Selatan Total Kasus 55.545',
  },
  Bengkulu: {
    center: { lat: -3.51868, lng: 102.53598 },
    population: 21574,
    contentString: 'Bengkulu Total Kasus 21.574',
  },
  Lampung: {
    center: { lat: -4.8555, lng: 105.0273 },
    population: 43397,
    contentString: 'Lampung Total Kasus 43.397',
  },
  "Kepulauan Bangka Belitung": {
    center: { lat: -2.75775, lng: 107.58394 },
    population: 42795,
    contentString: 'Kepulauan Bangka Belitung Total Kasus 42.795',
  },
  "Kepulauan Riau": {
    center: { lat: -0.15478, lng: 104.58037 },
    population: 50712,
    contentString: 'Kepulauan Riau Total Kasus 50.712',
  },
  "DKI Jakarta": {
    center: { lat:  6.1745, lng: 106.8227 },
    population: 842647,
    contentString: 'DKI Jakarta Total Kasus 842.647',
  },
  "Jawa Barat": {
    center: { lat: -6.88917, lng: 107.64047 },
    population: 660151,
    contentString: 'Jawa Barat Total Kasus 660.151',
  },
  "Jawa Tengah": {
    center: { lat: -7.30324, lng: 110.00441 },
    population: 457259,
    contentString: 'Jawa Tengah Total Kasus 457.259',
  },
  "DI Yogyakarta": {
    center: { lat: 7.7956, lng: 110.3695 },
    population: 140898,
    contentString: 'DI Yogyakarta Total Kasus 140.898',
  },
  "Jawa Timur": {
    center: { lat: -6.96851, lng: 113.98005 },
    population: 363439,
    contentString: 'Jawa Timur Total Kasus 363.439',
  },
  Banten: {
    center: { lat: -6.44538, lng: 106.13756 },
    population: 125476,
    contentString: 'Banten Total Kasus 125.476',
  },
  Bali: {
    center: { lat: -8.23566, lng: 115.12239 },
    population: 98637,
    contentString: 'Bali Total Kasus 98.637',
  },
  "Nusa Tenggara Barat": {
    center: { lat: -8.12179, lng: 117.63696 },
    population: 23854,
    contentString: 'Nusa Tenggara Timur Total Kasus 23.854',
  },
  "Nusa Tenggara Timur": {
    center: { lat: -8.56568, lng: 120.69786 },
    population: 54806,
    contentString: 'Nusa Tenggara Timur Total Kasus 54.806',
  },
  "Kalimantan Barat": {
    center: { lat: -0.13224, lng: 111.09689 },
    population: 32512,
    contentString: 'Kalimantan Barat Total Kasus 32.512',
  },
  "Kalimantan Tengah": {
    center: { lat: -1.49958, lng: 113.29033 },
    population: 40875,
    contentString: 'Kalimantan Tengah Total Kasus 40.875',
  },
  "Kalimantan Selatan": {
    center: { lat: -2.94348, lng: 115.37565 },
    population: 60376,
    contentString: 'Kalimantan Selatan Total Kasus 60.376',
  },
  "Kalimantan Timur": {
    center: { lat:  0.78844, lng: 116.242 },
    population: 142434,
    contentString: 'Kalimantan Timur Total Kasus 142.434',
  },
  "Kalimantan Utara": {
    center: { lat:  0.78844, lng: 116.242 },
    population: 28876,
    contentString: 'Kalimantan Utara Total Kasus 28.876',
  },
  "Sulawesi Utara": {
    center: { lat: 0.65557, lng: 124.09015 },
    population: 30226,
    contentString: 'Sulawesi Utara Total Kasus 30.226',
  },
  "Sulawesi Tengah": {
    center: { lat: -1.69378, lng: 120.80886 },
    population: 36917,
    contentString: 'Sulawesi Tengah Total Kasus 36.917',
  },
  "Sulawesi Selatan": {
    center: { lat: -3.64467, lng: 119.94719 },
    population: 98897,
    contentString: 'Sulawesi Selatan Total Kasus 98.897',
  },
  "Sulawesi Tenggara": {
    center: { lat: -3.54912, lng: 121.72796 },
    population: 18846,
    contentString: 'Sulawesi Tenggara Total Kasus 18.846',
  },
  Gorontalo: {
    center: { lat: 0.71862, lng: 122.45559 },
    population: 10462,
    contentString: 'Gorontalo Total Kasus 10.462',
  },
  "Sulawesi Barat": {
    center: { lat: -2.49745, lng: 119.3919 },
    population: 10746,
    contentString: 'Sulawesi Barat Total Kasus 10.746',
  },
  Maluku: {
    center: { lat: -3.11884, lng: 129.42078 },
    population: 14166,
    contentString: 'Maluku Total Kasus 14.166',
  },
  "Maluku Utara": {
    center: { lat: 0.63012, lng: 127.97202 },
    population: 11284,
    contentString: 'Maluku Utara Total Kasus 11.284',
  },
  "Papua Barat": {
    center: { lat: -1.38424, lng: 132.90253 },
    population: 21671,
    contentString: 'Papua Barat Total Kasus 21.671',
  },
  Papua: {
    center: { lat: -3.98857, lng:  138.34853 },
    population: 30693,
    contentString: 'Papua Total Kasus 30.693',
  },
};

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("zona-covid-map"), {
    center: { lat: -6.2000, lng: 106.816 },
    zoom: 8,
  });

  function cekWarna(population) {
    return (population >= 100000) ? "#ff0000"
      : (population >= 40000 && population < 100000) ? "#ff8800"
      : "#ffea00"
  }
// for in
  for (const city in mocksCityMap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({

      strokeColor: cekWarna(mocksCityMap[city].population),
      strokeOpacity: 0.8,
      strokeWeight: 500,
      fillColor: cekWarna(mocksCityMap[city].population),
      fillOpacity: 0.35,
      map,
      center: mocksCityMap[city].center,
      radius: Math.sqrt(mocksCityMap[city].population) * 100,
    });


  const infowindow = new google.maps.InfoWindow({
    content: mocksCityMap[city].contentString,
  });
  
    google.maps.event.addListener(cityCircle, 'click', function(ev){
    infowindow.setPosition(cityCircle.getCenter());
    infowindow.open(map);
    })
  }
}
