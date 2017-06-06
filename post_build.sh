git config --global user.email "rpt@altervista.org"
git config --global user.name "Travis CI"

git branch deploy
git checkout deploy

mv client/modules/core/asm/*.js client/

rm -rf client/modules
rm -rf client/.gitignore
rm -rf server/config
rm -rf .settings
rm -rf .externalToolBuilders
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
git push -f https://${GH_TOKEN}@github.com/giovannipessiva/l4w deploy | sed -e 's/\/\/.*@github/\/\/[double secured]/g'
