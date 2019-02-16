/*** 
** Add scripts to wp_footer(). This script for change the Revolution Slider Background Video
** This is just for Example Purpose only.
***/
function child_theme_header_script() { ?>
	<script>
      jQuery(document).ready(function() {	
  
               setTimeout(function(){
                    jQuery('#rev_slider_1_1 .tp-revslider-slidesli').find('.tp-bgimg').attr('style','background-repeat: no-repeat; background-image: url("https://img.youtube.com/vi/IbQc_CqXAds/sddefault.jpg"); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit; z-index: 20;');
                    jQuery('#rev_slider_1_1 .tp-revslider-slidesli').find('.tp-bgimg').attr('src','https://img.youtube.com/vi/IbQc_CqXAds/sddefault.jpg');
                    jQuery('#rev_slider_1_1 .tp-revslider-slidesli').find('.rs-background-video-layer').data('ytid','IbQc_CqXAds');
                    jQuery('#rev_slider_1_1 .tp-revslider-slidesli').find('.rs-background-video-layer iframe').attr('src','https://www.youtube.com/embed/IbQc_CqXAds?version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0;;origin=http://localhost;&controls=0');
                  }, 500);
      });
	</script>
<?php }
add_action( 'wp_footer', 'child_theme_header_script' );


/*** 
** Validation of form fields using JQUERY
***/

var c = jQuery('.mukii-phone');
   c.blur(function(e){
        phone = jQuery(this).val();
        phone = phone.replace(/[^0-9]/g,'');
        if (phone.length != 10)
        {
            alert('Phone number must be 10 digits.');
            jQuery('.mukii-phone').val('');
            jQuery('.mukii-phone').focus();
        }
    });
jQuery('.mukii-email').focus(function(){
        
    }).blur(function(){
        var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var is_email=re.test(jQuery(this).val());
        if(!is_email){
            confirm("You've entered wrong email.");
            jQuery('.mukii-email').val('');
            jQuery('.mukii-email').focus();
        }else{
            return true;
        }
    });

/******* 
**** Accordian
********/

/**HTML View***/
<h5>Heading1</h5>
<div>Content1</div>

jQuery( 'div #cs_accordion h5' ).click(function(a){
	jQuery(a.target).next('div').siblings('div').slideUp("slow", "linear");
        jQuery(a.target).next('div').slideToggle("slow", "linear");
});
