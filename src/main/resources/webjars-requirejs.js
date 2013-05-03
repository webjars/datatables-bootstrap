/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'DT_bootstrap': [ 'webjars!jquery.js' ]
    }
});
