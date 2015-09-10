(function () {

	var grid;
	document.addEventListener('dom-change', function (event) {
	  if (!$(event.target.dataHost).hasClass('grid-item')) return; 
	  if (!grid) {
			grid = new Masonry('#resume .grid', {
				columnWidth: event.target,
				itemSelector: '.grid-item',
				isFitWidth: true,
				transitionDuration:0
			});
		}
		else {
			grid.layout();
		}	
	});
}());
