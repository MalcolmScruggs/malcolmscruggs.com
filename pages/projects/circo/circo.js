function iconHoverState(id) {
    $('#play-icon').addClass('zoom');
}

function removeIconHoverState(id) {
    $('#play-icon').removeClass('zoom');
}

$(document).ready(function() {
    $('#play-icon').hover(iconHoverState, removeIconHoverState);
    $('#play-text').hover(iconHoverState, removeIconHoverState);
});