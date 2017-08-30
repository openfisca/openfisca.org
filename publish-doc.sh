#!/bin/sh

git clone --branch gh-pages https://github.com/openfisca/openfisca.org.git
# this next line clones the "doc-html" branch.
# "doc-html" contains the latest build of the doc's html.
git clone --branch doc-html https://github.com/openfisca/openfisca.org.git doc-file
rm --recursive --force openfisca.org/doc
mv doc-file/doc openfisca.org/doc
cd openfisca.org
git add .
git config --global user.name "OpenFisca-Bot"
git config --global user.email "contact@openfisca.fr"
git commit --message="Add latest doc version"
git push https://github.com/openfisca/openfisca.org.git gh-pages
