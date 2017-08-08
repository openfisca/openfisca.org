var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish('to_be_published', {
	user: {
    name: 'OpenFisca-Bot',
  	},
  	branch: 'gh-pages',
  	message: 'Auto-commit from master branch'
}, function(err) {});
