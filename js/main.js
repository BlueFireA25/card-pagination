let itms = 6; // itemsPerPage
let stpg = 0; // startPage
let pltd = 4; // pageLinksToDisplay
let winw = window.innerWidth;

function optionsByWindowSize() {
    winw = window.innerWidth;
    if (winw > 1600) { itms = 6; pltd = 4; }
    else if (winw > 1230) { itms = 5; pltd = 4; }
    else if (winw > 980) { itms = 4; pltd = 4; }
    else if (winw > 750) { itms = 3; pltd = 4; }
    else if (winw > 510) { itms = 2; pltd = 4; }
    else { itms = 1; pltd = 1; }
}

function reportWindowSize() {
    optionsByWindowSize();
    //purePajination Script - START
    if (document.readyState === "complete") {
        new purePajinate({
            containerSelector: '.items',
            itemSelector: '.items > div',
            navigationSelector: '.pagination',
            pageLinksToDisplay: pltd,
            showFirstLast: true,
            navLabelPrev: '&nbsp;&nbsp;&nbsp;',
            navLabelNext: '&nbsp;&nbsp;&nbsp;',
            navLabelFirst: '&nbsp;&nbsp;&nbsp;',
            navLabelLast: '&nbsp;&nbsp;&nbsp;',
            itemsPerPage: itms,
            startPage: stpg
        });
    } // purePajination Script - END
}

document.onreadystatechange = reportWindowSize;
window.onresize = reportWindowSize;