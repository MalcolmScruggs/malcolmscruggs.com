function applyClass(className) {
    console.log(className);
    $('#background_background').addClass(className);
    $('#background_background').removeClass('grayscale');
}

function reset() {
    $('#background_background').attr('class', 'background');
    $('#background_background').addClass('grayscale');
}

