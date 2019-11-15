const slider = $(".doc__main");


const slickconf ={
        vertical: true,
        verticalSwiping: true,
        arrows:false,
        infinite:false,
        cssEase:'ease-in-out',
    };

function mouseWheel(slider) {
    $(window).on('wheel', {
        slider: slider
    }, mouseWheelHandler);
};

function mouseWheelHandler(event) {
    const slider = event.data.slider;
    const delta = event.originalEvent.deltaY;
    if (delta > 0) {
        slider.slick('slickNext');
    } else {
        slider.slick('slickPrev');
    }
}

slider.on('init', () => {
    mouseWheel(slider)
}).slick(slickconf);