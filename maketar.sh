echo $1 || exit
yarn run build
mkdir package
cp -R dist package
cp package.json package
cp README.md package
tar -cvzf "knotel-website-ui-v$1.tgz" package/