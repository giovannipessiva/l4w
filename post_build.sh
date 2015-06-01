git config --global user.email "giovannipessiva@users.noreply.github.com"
git config --global user.name "Travis CI"

git branch deploy
git checkout deploy

rm -rf client/js
rm -rf client/ts
rm .travis.yml
rm GruntFile.js
rm README.md
rm post_build.sh

git add . --all
git commit -m "Travis build"
git push -f https://${GH_TOKEN}@github.com/giovannipessiva/l4w temp > /tmp/out.tmp 2>&1
cat /tmp/out.tmp | sed -i 's/${GH_TOKEN}/<hidden>/g'
