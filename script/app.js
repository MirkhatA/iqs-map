;$(function () {
    var init = function () {
        $('#kzSvgNoDetails').click(showKzDetails);
        $('#otherRegions').click(resetMap);
        $('#emptyKzSvg').click(disableSelectedRegion);

        // zoom to region
        $('#almaty').click(zoomToAlmaty);
        $('#mangystau').click(zoomToMangystau);
        $('#atyrau').click(zoomToAtyrau);
    }

    // show kz details
    var showKzDetails = (function () {
        clearTransform();
        $('#worldMap').addClass('zoom');
        $('#kzSvgDetails').children('g').css('visibility', 'visible');
        $('#kzSvgNoDetails').css('visibility', "hidden");
        $('#kzSmallIcons').css('visibility', 'hidden');
    });

    // zoom out from region to all regions
    var disableSelectedRegion = (function () {
        $('#kzSvgDetails').children('g').css('visibility', 'visible');
        $('#worldMap').removeClass('zoom' + capitalizeFirstLetter(currentRegion.slice(1)));
    });

    // zoom out to world map
    var resetMap = (function () {
        console.log('reset');
        clearTransform();
        $('#worldMap').removeClass();
        $('#kzSvgDetails').children('g').css('visibility', 'hidden');
        $('#kzSmallIcons').css('visibility', 'hidden');
        $('#kzSvgNoDetails').css('visibility', "visible");
    });

    // clear transform values
    var clearTransform = (function () {
        $('#slide').css({
                'transform':'scale(1,1) translate(0px, 0px)'
            });
    });

    init();
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
