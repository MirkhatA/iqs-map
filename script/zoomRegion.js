var currentRegion;

var zoomToAlmaty = (function () {
    $('#worldMap').addClass('zoomAlmaty');
    currentRegion = '#almaty';
    disableOtherRegions(currentRegion);
});

var zoomToMangystau = (function () {
    $('#worldMap').addClass('zoomMangystau');
    currentRegion = '#mangystau';
    disableOtherRegions(currentRegion);
});

var zoomToAtyrau = (function () {
    $('#worldMap').addClass('zoomAtyrau');
    currentRegion = '#atyrau';
    disableOtherRegions(currentRegion);
})

// disable visibility of other regions
var disableOtherRegions = (function (activeRegion) {
    var otherRegions = $('#kzSvgDetails').children('g').not(activeRegion);
    otherRegions.css('visibility', 'hidden');
});