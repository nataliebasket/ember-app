#!/bin/bash

# Exit with nonzero exit code if anything fails.
set -e

# git config user.name "Хохлова Наталия"
# git config user.email "nataliebasket@gmail.com"

# echo "Start to deploy..."

# git checkout --orphan gh-pages
# ls -l

# git --work-tree ./dist add --all
# git --work-tree ./dist commit -m "Deploy to GitHub Pages"
# git push -f origin HEAD:gh-pages
# rm -r dist

# git checkout -f master
# git branch -D gh-pages


git checkout --orphan gh-pages
cp -R dist/* ./
git add index.html assets/
git commit -m 'update gh-pages' && git push

echo "Successfully deployed"
