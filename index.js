/**
 * turn into show and hide function for the headline page
 */
function renderProjects() {
    let project = STORE["projects"];
    $('.js-content').toggleClass('hidden', false)
    $('.js-content').html(project);
    console.log('renderProjects ran')
};


function renderBio() {
$('.menu').on('click', '.about', function (event) {
    let about = STORE["about"];
    $('.js-headline-page').toggleClass('hidden', true);
    $('.js-content').toggleClass('hidden', false);
    $('.js-content').html(about);
    console.log('renderBio ran');
});
};

function handleStartClick() {
    $('div').on('click', '.js-see-project', function (event) {
        $('.js-headline-page').toggleClass('hidden', true);
        $('.js-content').toggleClass('hidden', false);
        renderProjects();
        console.log('renderHeadline ran');
    })
};



function handleNavClick() {
    $('.menu').on('click', '.js-project', function (event) {
        $('.js-headline-page').toggleClass('hidden', true);
        renderProjects();
        console.log('handleNavClick ran');
    });
};

function renderHeadline () {
    $('.js-head-start').on('click', function (event) {
        $('.js-headline-page').toggleClass('hidden', false);
        $('.js-content').toggleClass('hidden', true);
        console.log('renderHeadline ran');
    })
}

function runPortfolio() {
    renderBio();
    renderHeadline();
    handleStartClick();
    handleNavClick();
    console.log('runPortfolio ran');
}

runPortfolio();
