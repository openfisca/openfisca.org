//Edit current openfisca.org page on github.

(function() {
	var pathArray = window.location.pathname.split("/")
	pathArray.pop() //Clean last empty item.

	var filename = pathArray.pop()
	if (filename == "fr" || filename == "en") {
		document.getElementById('github').href = "https://github.com/openfisca/openfisca.org/edit/master/layouts/index.html"
	} else {
		document.getElementById('github').href = "https://github.com/openfisca/openfisca.org/edit/master/layouts/_default/" + filename + ".html"
	}
})();
