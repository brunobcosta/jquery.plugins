$.fn.ajaxLoding = function(deferrer,options){
	var defaults = {
		target:$("<span>Aguarde...</span>"),
		hide:true
	};
	var settings = $.extend(defaults,options);
	return $(this).each(function(){
		var self = this;
		var x = settings.target.clone();
		if(settings.hide){
			$(self).fadeOut("fast",function(){$(this).after(x.fadeIn("fast"));});
		}else{
			 $(self).after(x.fadeIn("fast"));   
		}
		deferrer.done(function(){
			x.fadeOut("fast",function(){if(settings.hide)$(self).fadeIn("fast");}).remove();
		});
	});
};