//*****
Get all checked checkboxes values from one form
*****//
jQuery('input:checkbox:checked').each(function(){  });

//*****
Get cookies from browser using two ways
*****//
1. By creating function:

function getCookies(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
};
getCookies('cookie_nanme');

2. By using variable:

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('percentage_value'))
  .split('=')[1];


//*****
Fetch URL using jquery
*****//
location.hostname = github.com
document.URL = https://github.com/mukii23/JS/edit/master/Other1.js
document.location.origin = https://github.com

//*****
Fetch Query String from URL using jquery
*****//
	var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    var field_name = vars['field_name'];
