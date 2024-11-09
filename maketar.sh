# usage ./maketar.sh 1.7.14
echo $1 || exit
rm -rf dist
yarn run build
mkdir package
cp -R dist package
cp package.json package
cp README.md package
tar -cvzf "knotel-website-ui-v$1.tgz" package/