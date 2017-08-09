var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish('public',{
	user: {
		name: 'OpenFisca-Bot',
	},
	branch: 'gh-pages',
	message: 'Auto-commit from master branch'
	},function(err) {
		if(err){
			console.error(err)
    		process.exit(1)
		}
	});
