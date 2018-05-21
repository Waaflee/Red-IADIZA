#!/bin/zsh

rm -rf dist
rm -rf docs
yarn run build
mv dist docs
cd docs
sed -i -e s:=\"\/:=\".\/:g index.html
sed -i -e s:=\"\/:=\".\/:g *.js
cd ..
git add -A
git commit -a -m'Processed buidl for github pages publishing'
