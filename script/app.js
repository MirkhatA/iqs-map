;$(function () {
    var init = function () {
        $('#kzSvgNoDetails').click(showKzDetails);
        $('#otherRegions').click(resetMap);
    }

    var showKzDetails = (function () {
        clearTransform();
        $('#worldMap').addClass('zoom');
        $('#kzSvgDetails').css('visibility', 'visible');
        $('#kzSvgNoDetails').css('visibility', "hidden");
    });

    var resetMap = (function () {
        $('#worldMap').removeClass('zoom');
        $('#kzSvgDetails').css('visibility', 'hidden');
        $('#kzSvgNoDetails').css('visibility', "visible");
    });

    var clearTransform = (function () {
        $('#slide')
            .css({
                'transform':'scale(1,1) translate(0px, 0px)'
            });
    });


    init();
});

