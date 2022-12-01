//Track one page of openfisca.org

var _paq = _paq || [];
_paq.push(['setDocumentTitle', document.domain + "/" + document.title]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
	var u="https://stats.data.gouv.fr/";
	_paq.push(['setTrackerUrl', u+'piwik.php']);
	_paq.push(['setSiteId', 4]);
	var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
