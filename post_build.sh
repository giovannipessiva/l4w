git config --global user.email "rpt@altervista.org"
git config --global user.name "Travis CI"

git branch deploy
git checkout deploy

rm -rf client/src
rm -rf server/src
rm -rf common/src
rm -rf client/.gitignore
rm -rf server/.gitignore
rm -rf common/.gitignore
rm -rf .settings
rm -rf .externalToolBuilders
rm -rf .vscode
rm .env
rm .project
rm .travis.yml
rm Gruntfile.js
rm tslint.json
rm yarn.lock
rm *.md
rm *.sh
rm *.bat

git add . --all
git commit -m "Travis build"
git push -f https://${GH_TOKEN}@github.com/giovannipessiva/l4w deploy > git.log 2>&1
cat git.log | sed -e 's/\/\/.*@github/\/\/[double secured]/'
rm git.log
