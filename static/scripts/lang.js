//Read the browser language and adapt site language

(function changeLang() {
	if (window.location.pathname == "") {
		var lang = navigator.language.substr(0, 2); //navigator.userLanguage
		if (lang == "fr") {
		    window.location = "/fr";
		} else {
			window.location = "/en";
		}
	}
})()
