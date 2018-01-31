(function ( $ ) {
"use strict";

	$.fn.dropdownSelect = function(options) {
		var settings = $.extend({
            // These are the defaults.
            arrow: false,
            size: false
        }, options );
		$(document).on('click keyup', '.dropdown-option', function(e){
				e.preventDefault();
  				var dropdown = $(this).closest('.dropdown');
  				dropdown.find('select').val($(this).data('value'));
  				dropdown.find('button.form-control').text($(this).text());	
			});
    	this.filter( "select.form-control" ).each(function() {
			var $this = $(this);
			var text = '...';
			var formClass = $this.attr('class');
			var html = '';
        	if($this.closest('.dropdown-select').length === 0){
		  		$('option', this).each(function(index){
					if(index === 0){
						text = $("option:selected", $this).text();
		  			}				
					html += '<a class="dropdown-item dropdown-option" href="#" data-value="'+$(this).attr('value')+'">'+$(this).text()+'</a>';
		  		});
		  	
		  		var button = $('<button class="dropdown-toggle '+formClass+'" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+text+'</button>');
		  		var menu = $('<div class="dropdown-menu"></div>');
		  
		   		var wrap = '<div class="dropdown dropdown-select"></div>';
		  		$(this).wrap(wrap).before(button).before(menu);
		  		menu.append($(html));
				return this;
			}
			
		});
	};
}( jQuery ));