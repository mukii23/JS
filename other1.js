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
    
