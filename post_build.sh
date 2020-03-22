git config --global user.email "rpt@altervista.org"
git config --global user.name "Travis CI"

git branch deploy
git checkout deploy

rm .gitignore
echo "/.tscache" >> .gitignore
echo "/.vscode" >> .gitignore
echo "/data/database" >> .gitignore
echo "/src" >> .gitignore
echo ".env" >> .gitignore
echo ".travis.yml" >> .gitignore
echo "CONTRIBUTING.md" >> .gitignore
echo "Gruntfile.cjs" >> .gitignore
echo "LICENSE" >> .gitignore
echo "node_modules" >> .gitignore
echo "post_build.sh" >> .gitignore
echo "Procfile_inspect" >> .gitignore
echo "*.md" >> .gitignore
echo "*.bat" >> .gitignore
echo "tsconfig.json" >> .gitignore
echo "tslint.json" >> .gitignore
echo "webpack.config.cjs" >> .gitignore

git add .
git commit -m "Travis build"
git push -f https://${GH_TOKEN}@github.com/giovannipessiva/l4w deploy > git.log 2>&1
cat git.log | sed -e 's/\/\/.*@github/\/\/[double secured]/'
rm git.log
