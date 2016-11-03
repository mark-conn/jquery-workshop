/* Write your code here! */
jQuery.getJSON('https://api.wheretheiss.at/v1/satellites/25544').then(
    function(res) {
        var issLon = res.longitude;
        var issLat = res.latitude;
        $('.title').after(`<div class="iss"><h3>ISS POSITION</h3><p>LAT: ${issLat}</p><p>LON: ${issLon}</p></div>`);
    }
)