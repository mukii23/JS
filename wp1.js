/**************
**** Add Ajax in wordpress different ways ****
**************/

1. var myajax = { ajaxurl: 'http://www.domain.com/wp-admin/admin-ajax.php' };

$.ajax({
 url: myajax.ajaxurl
-------You Code--------
});
###############################################
2. var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";

$.ajax({
 url: ajaxurl
-------You Code--------
});
###############################################
3. function myscripts(){
      wp_register_script( 'pott_js', get_stylesheet_directory_uri().'/pott.js', array('jquery') );
      wp_enqueue_script( 'pott_js' );
      wp_localize_script('pott_js', 'ajax_login', array('ajaxurl' => admin_url('admin-ajax.php')));
   }
   add_action('init', 'myscripts');
   
$.ajax({
 url: ajax_login.ajaxurl
-------You Code--------
});
###############################################
4. var getUrl = window.location;
   var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1] + '/wp-admin/admin-ajax.php';
$.ajax({
 url: ajax_login.ajaxurl
-------You Code--------
});


/**************
**** Display list items on typing in Input box ****
*** This exmaple is showing the table rows. The text in table rows will be shown as user typing the single word.
**************/

 $("#myInput").keyup(function(){
            var issueValue = $(this).val().toLowerCase();
            
            if($(this).val().length == 0){
                $(".org-table").hide();
            }else{
                $(".org-table").show();
            }

            $("#issues tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(issueValue) > -1)
            });
  }).keyup();
  
  
  /************
  **** Display user data based on drop-down selection. ****
  **** On change the drop-down the selected 'value' will compare itself with 'td.value'. if it matches with the particular 
  **** td class, that td will be shown. The td have class in pattern like 'Hello_World' *****
  *************/
  
   $("select.filterby").change(function(){
            var filters = $.map($("select.filterby").toArray(), function(e){
                return $(e).val();
            }).join(".");

            $("table tbody tr").find("td").hide();
            $("table tbody tr").find("td." + filters.replace(/ /g, "_")).show(); 
            // Convert the drop down value 'Hello World' to 'Hello_World'
        });
        
    /*** HTML VIEW ***/
    
    <tr>
        <td class="all <?php echo str_replace(' ','_',$var)?>">Text1</td>
    </tr>
