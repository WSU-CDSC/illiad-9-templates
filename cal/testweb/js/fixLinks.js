// this code makes sure that links marked with a unique ID have the arrow next to them to denote they are external links

$(document).ready(function() {
    $(
        '#menu-item-291, #menu-item-293, #menu-item-293, #menu-item-3758, #menu-item-285, #menu-item-3161, #menu-item-281, #menu-item-322, #menu-item-323, #menu-item-324, #menu-item-282, #menu-item-283, #menu-item-284'
    ).removeClass('external');
    $(
        '#menu-item-291, #menu-item-293, #menu-item-293, #menu-item-3758, #menu-item-285, #menu-item-3161, #menu-item-281, #menu-item-322, #menu-item-323, #menu-item-324, #menu-item-282, #menu-item-283, #menu-item-284'
    ).addClass('external');
});