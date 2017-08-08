var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish('dist', {
	user: {
    name: 'OpenFisca-Bot',
  	},
  	branch: 'test-gh-pages',
  	message: 'Commit from ci_from_master'
}, function(err) {});
