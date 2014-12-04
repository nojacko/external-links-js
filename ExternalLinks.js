// http://closure-compiler.appspot.com/home
// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name ExternalLinks.min.js
// ==/ClosureCompiler==

var ExternalLinks = function(skipDomains) {
    // Check skipDomains
    if (typeof skipDomains == 'undefined' ) {
        skipDomains = [];
    }

    // Add Current Domain
    skipDomains.push(location.hostname.replace('www.', ''));

    // Find and loop all anchors
    var anchors = document.getElementsByTagName('a');
    for (var i = 0; i < anchors.length; i++){
        var link = anchors[i];

        // Check for http / https
        if (link.href.match(/^https?\:/i)) {

            // Check for domains that shouldn't open in new window
            var newWindow = true;
            for (var j in skipDomains) {
                var domain = skipDomains[j];
                if (link.href.indexOf(domain) > -1) {
                    newWindow = false;
                    break;
                }
            }

            // It's external
            if (newWindow) {
                link.setAttribute('target', '_blank');
            }
        }
    }
}
