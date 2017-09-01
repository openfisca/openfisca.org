//Edit current openfisca.org page on github.

(function() {
	var filename = window.location.pathname.split("/").pop()
	document.getElementById('github').href = "https://github.com/openfisca/openfisca.org/edit/master/public/" + filename
})();
