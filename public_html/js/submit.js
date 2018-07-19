		$(document).ready(function() {
			$('form').submit(function(event){ 
				$('div').remove(".alert"); 
				var formDados = jQuery(this).serialize();

                $.ajax({
					type        : 'POST', 
					url         : $('form').attr('action'),
					data        : formDados,
					dataType    : 'json',
					encode		: true
				})
            
				.done(function(data) {
					// log data to the console so we can see
					//console.log(data.msg); 
					$('nav').after(data.msg);
					$( 'html, body' ).animate( { scrollTop: 0 }, 'slow' );
				});
				event.preventDefault();
			});
		});