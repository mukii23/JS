/******************************
=====Toggle menu slide from right for desktop
******************************/
    jQuery('hamburger_icon').click(function(){
		    jQuery('toggle_menu').show();
			if (jQuery('toggle_menu').hasClass('visible')){
				jQuery('toggle_menu').animate({"right":"-1000px"}, "slow").removeClass('visible');
			} else {
				jQuery('toggle_menu').animate({"right":"0px"}, "slow").addClass('visible');
			}
		});
    
    CSS:
    .toggle_menu {
        position: absolute;
        background-color: #fdfcfc;
        top: 15px;
        z-index: 3;
        right: -1000px;
        box-shadow: 0 0 7px gray;
        width: 500px;
        display: none;
    }
    
/******************************
=====Toggle submenu on-click
******************************/
jQuery('#custom_menu ul.menu > li.menu-item-has-children').click(function(e){

	jQuery('#custom_menu ul.menu > li.menu-item-has-children').not(this).find('ul.sub-menu').slideUp();
		jQuery(this).find('ul.sub-menu').stop(true, true).slideToggle(400);
			return false;
	});
	jQuery('#custom_menu ul.menu > li.menu-item-has-children > ul > li').click(function(event){
		event.stopPropagation();
});

/******************************
=====MENU hide on scroll
******************************/

jQuery(window).scroll(function(){                       
	if (jQuery(this).scrollTop() >= 300) { 
	   jQuery('header .header1').css('display', 'none');
	} else {
	   jQuery('header .header1').css('display', 'block');
	}
});
