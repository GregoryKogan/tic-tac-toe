#!/usr/bin/env sh

# abort on errors
set -e

rm -rf src/cpp/build

# build
yarn build

cp src/wasm/tic-tac-toe.wasm dist/assets/tic-tac-toe.wasm
cp src/wasm/tic-tac-toe.js dist/assets/tic-tac-toe.js

# navigate into the build output directory
cd dist

cp index.html 404.html

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:GregoryKogan/tic-tac-toe.git main:gh-pages

cd -

mkdir src/cpp/build