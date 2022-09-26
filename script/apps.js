;$(function () {
    var init = function () {
        $('#kzSvgNoDetails').click(showKzDetails);
        $('#otherRegions').click(resetMap);
        $('#emptyKzSvg').click(disableSelectedRegion);

        // zoom to region
        $('#almaty').click(zoomToAlmaty);
        $('#mangystau').click(zoomToMangystau);
        $('#atyrau').click(zoomToAtyrau);
        $('#aktobe').click(zoomToAktobe);
        $('#kyzylorda').click(zoomToKyzylorda);
        $('#turkystan').click(zoomToTurkystan);
        $('#aqmola').click(zoomToAqmola);
        $('#pavlodar').click(zoomToPavlodar);
        fillBackground();
        $('.cancelLogo').click(closeInfoBlock);




        $('#iqsOne').click(openIqsOneCard);
        $('#iqseSecond').click(openIqsSecondCard);
        $('#iqsDIsl').click(openIqsSecondCard);
        $('#almatyIcon').click(openAlmatyCard);
        $('#astanaIcon').click(openAstanaCard);
        $('#kyzylordaIcon').click(openKyzylordaCard);
        $('#shymkentIcon').click(openShymkentCard);
        $('#iqseOneFour').click(openIqseOneFourCard);
        $('#iqseSix').click(openIqseSixCard);
        $('#aktobeSmallIcon').click(openAktobeCard);
        $('#pavlodarSmallIcon').click(openPavlodarCard);
        $('#iqseFive').click(openIqseFiveCard);
    }

    // show kz details
    var showKzDetails = (function () {
        clearTransform();
        $('.smallIcon').css('visibility', 'hidden');
        $('.icon').css('visibility', 'visible');
        $('#worldMap').addClass('zoom');
        $('#kzSvgDetails').children('g').css('visibility', 'visible');
        $('#kzSvgNoDetails').css('visibility', "hidden");
    });

    // zoom out from region to all regions
    var disableSelectedRegion = (function () {
        fillBackground();
        $('.smallIcon').css('visibility', 'hidden');
        $('.icon').css('visibility', 'visible');
        $('#kzSvgDetails').children('g').css('visibility', 'visible');
        $('#worldMap').removeClass('zoom' + capitalizeFirstLetter(currentRegion.slice(1)));
        $('.cards').css('visibility', 'hidden');
    });

    // zoom out to world map
    var resetMap = (function () {
        clearTransform();
        fillBackground();
        $('#worldMap').removeClass();
        $('#kzSvgDetails').children('g').css('visibility', 'hidden');
        $('#kzSvgNoDetails').css('visibility', "visible");
        $('.icon').css('visibility', 'hidden');
        $('.smallIcon').css('visibility', 'hidden');
    });

    // clear transform values
    var clearTransform = (function () {
        $('#slide').css({
            'transform':'scale(1,1) translate(0px, 0px)'
        });
        $('.cards').css('visibility', 'hidden');

    });

    var fillBackground = (function () {
        $('#emptyKzSvgPath').css('fill', '#0A5C7A');
    });

    var showInfoBlock = (function () {
        $('#infoPage').css('left', '0px');
    });

    var closeInfoBlock = (function () {
        console.log('close')
        var screenWidth = screen.width + 300;
        $('.info-page').css('left', '-' + screenWidth + 'px');
    });

    // slide


    init();
});



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
