
window.onload = function() {
    let hashValue = decodeURI(window.location.hash.slice(1));

    let selectElement = document.querySelector('#balSecim');
    
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === hashValue) {
            selectElement.selectedIndex = i;
            break;
        }
    }
};
