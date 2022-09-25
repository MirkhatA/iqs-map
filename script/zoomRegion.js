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

var zoomToAktobe = (function () {
    $('#worldMap').addClass('zoomAktobe');
    currentRegion = '#aktobe';
    disableOtherRegions(currentRegion);
})

var zoomToKyzylorda = (function () {
    $('#worldMap').addClass('zoomKyzylorda');
    currentRegion = '#kyzylorda';
    disableOtherRegions(currentRegion);
})

var zoomToTurkystan = (function () {
    $('#worldMap').addClass('zoomTurkystan');
    currentRegion = '#turkystan';
    disableOtherRegions(currentRegion);
})

var zoomToAqmola = (function () {
    $('#worldMap').addClass('zoomAqmola');
    currentRegion = '#aqmola';
    disableOtherRegions(currentRegion);
})

var zoomToPavlodar = (function () {
    $('#worldMap').addClass('zoomPavlodar');
    currentRegion = '#pavlodar';
    disableOtherRegions(currentRegion);
})


// disable visibility of other regions
var disableOtherRegions = (function (activeRegion) {
    var otherIcons = $(activeRegion).children('.smallIcon');
    var otherRegions = $('#kzSvgDetails').children('g').not(activeRegion);
    $('#emptyKzSvgPath').css('fill', '#1e87ac');
    $('.icon').css('visibility', 'hidden');
    otherRegions.css('visibility', 'hidden');
    otherIcons.css('visibility', 'visible');
});

