var ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    user: {
      name: 'OpenFisca-Bot',
    },
    branch: 'doc-branch-publish',
    message: 'Auto-commit from master branch',
  },
  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
