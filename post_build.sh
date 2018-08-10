git config --global user.email "rpt@altervista.org"
git config --global user.name "Travis CI"

git branch deploy
git checkout deploy

rm -rf .vscode
rm -rf client/src
rm -rf common/src
rm -rf database
rm -rf server/src
rm client/.gitignore
rm client/tsconfig-client.json
rm common/tsconfig-base.json
rm server/.gitignore
rm server/tsconfig-server.json
rm .env
rm .travis.yml
rm Gruntfile.js
rm LICENSE
rm Procfile_inspect
rm tsconfig.json
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
