/**
 * turn into show and hide function for the headline page
 */
function renderProjects() {
    let project = STORE["projects"];
    $('.js-content').toggleClass('hidden', false)
    $('.js-content').html(project);
};


function renderBio() {
$('.menu').on('click', '.about', function (event) {
    let about = STORE["about"];
    $('.js-headline-page').toggleClass('hidden', true);
    $('.js-content').toggleClass('hidden', false);
    $('.js-content').html(about);
});
};

function renderHeadline () {
    $('.js-head-start').on('click', function (event) {
        $('.js-headline-page').toggleClass('hidden', false);
        $('.js-content').toggleClass('hidden', true);
    });
};

function renderContact() {
    $('.menu').on('click', '.contact', function (event) {
        let contact = STORE["contact"];
        $('.js-headline-page').toggleClass('hidden', true);
        $('.js-content').toggleClass('hidden', false);
        $('.js-content').html(contact);
    });
};

function handleStartClick() {
    $('div').on('click', '.js-see-project', function (event) {
        $('.js-headline-page').toggleClass('hidden', true);
        $('.js-content').toggleClass('hidden', false);
        renderProjects();
    })
};

function handleNavClick() {
    $('.menu').on('click', '.js-project', function (event) {
        $('.js-headline-page').toggleClass('hidden', true);
        renderProjects();
    });
};

function handleContact() {
    $('.menu').on('click', '.contact', function (event) {
        $('.js-headline-page').toggleClass('hidden', true);
        renderContact();
    })
}



function runPortfolio() {
    renderBio();
    renderHeadline();
    renderContact();
    handleStartClick();
    handleNavClick();
    handleContact();
}

runPortfolio();
