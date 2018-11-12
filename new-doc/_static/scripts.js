$(document).ready(function() {
    $('a[href^="https://"], a[href^="http://"]').attr("target", "_blank"); // Make all external links open in a new Window
    // Internal docs containing an anchor are wrongly transpiled to an absolute link starting by '/'. This causes dead links when we serve under openfisca.org/doc. The following manually fix these links in JS.
    $( "a[href^='/']" ).attr("href",
      function( _, href ) {
        return '.' + href;
      }
    );
});
