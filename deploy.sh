#!/usr/bin/env sh

git add .
git commit -m 'deploy'
git push

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
 echo 'blog.dotohi.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:loveagri/blog.git master:gh-pages

cd -