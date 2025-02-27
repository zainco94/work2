function showpass(a){
  var e = a.nextElementSibling;
  e.type == 'password' ? e.type = 'text' : e.type = 'password';
}

function loadPremium(a, b) {
  var v = document.querySelector('#pay-value');
  var c = document.querySelector('#pay-code');
  v.innerHTML = b;
  var t = a.nextElementSibling.innerHTML;
  c.innerHTML = t;
}

function copy(a) {
  a.select();
  document.execCommand('copy')
}



function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function addVisibleClassOnLoad() {
    $('.anim').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('visible');
        }
    });
}

$(document).ready(function() {
    addVisibleClassOnLoad();

    $(window).scroll(function () {
        $('.anim').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('visible');
            }
        });
    });
});
