function iconHoverState(id) {
    $(id).addClass('zoom');
}

function removeIconHoverState(id) {
    $(id).removeClass('zoom');
}

$(document).ready(function() {
    let playIconID = '#play-icon';
    let playTextId = '#play-text';
    $(playIconID).hover(function() {iconHoverState(playIconID)}, function() {removeIconHoverState(playIconID)});
    $(playTextId).hover(function() {iconHoverState(playIconID)}, function() {removeIconHoverState(playIconID)});

    let githubIconID = '#github-icon';
    let githubTextID = '#github-text';
    $(githubIconID).hover(function() {iconHoverState(githubIconID)}, function() {removeIconHoverState(githubIconID)});
    $(githubTextID).hover(function() {iconHoverState(githubIconID)}, function() {removeIconHoverState(githubIconID)});
});