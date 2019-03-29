// this file is for use in CircleCI continuous integration environment

var browserName = ['chrome', 'firefox', 'internet explorer', 'android'][process.env.CIRCLE_NODE_INDEX];

var tunnel_id = 'circle-' + process.env.CIRCLE_BUILD_NUM + '-' + process.env.CIRCLE_NODE_INDEX;
var capabilities = browserName == 'android' ?
	  {
	    'tunnel-identifier': tunnel_id,
	    browserName: browserName,
	    version: '6.0'
	  }
	  :
	  {
	    'tunnel-identifier': tunnel_id,
	    browserName: browserName
	  };


module.exports = {
  seleniumServerURL: {
    hostname: 'ondemand.saucelabs.com',
    port: 80
  },
  driverCapabilities: capabilities,
  tags: [ 'circle-ci', '#' + process.env.CIRCLE_BUILD_NUM ],
  views: [ 'Verbose', 'SauceLabs' ],
  quit: 'always', // avoid wasting 90 seconds on SauceLabs
  bail: true,
  build: 'CircleCI#' + process.env.CIRCLE_BUILD_NUM
}
