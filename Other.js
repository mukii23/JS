/***************
**** Show '...' after 250 words in Paragraph ****
***************/

$('.class').each(function() {
         var showChar = 250;
         var content = $(this).html();

         if(content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content.substr(showChar-1, content.length - showChar);
                var html = c + '...';
                $(this).html(html);
           }
 });

/***************
**** Reset the Select Box option ****
***************/

$(".class").val(" ").trigger('change');

/***************
**** Open Link in new tab ****
***************/

window.open( 'http://www.example.com', '_blank' );
window.location = 'http://www.example.com';

/***************
**** Responsive using jQuery****
***************/

jQuery(window).resize(function() {
  var width = jQuery(window).width();
  if (width > 600){
       /*Your code*/
  }
});
