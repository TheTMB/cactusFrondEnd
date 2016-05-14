var iCur = 0;

var snapper = new Snap({
    element: document.getElementById('content'),
    disable: 'left'

});

snapper.close();

$("#open-right").click(function() {
	event.preventDefault();
    if (snapper.state().state=="right") {
    	snapper.close();
    } else {
    	snapper.open('right');

    }
});

$('.icon-search').click(function() {
    $('.search input').focus();
});

var elem = document.getElementById('content');

if (elem.addEventListener) {
  if ('onwheel' in document) {
    elem.addEventListener("wheel", onWheel);
  }
}

function onWheel(e) {
  e = e || window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;
  (delta > 0) ? $('.top-bar').addClass('scroll') : $('.top-bar').removeClass('scroll');
}
