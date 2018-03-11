function applyClass(className) {
    let background = $('#background_background');
    background.addClass(className);
    background.removeClass('grayscale');
}

function reset() {
    let background = $('#background_background');
    background.attr('class', 'background');
    background.addClass('grayscale');
}

