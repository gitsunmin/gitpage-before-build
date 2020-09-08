yarn build
cp -r ./subPages/sample ./dist
cp -r ./subPages/react-todolist ./dist
cd dist/
git init
git remote add origin https://github.com/gitsunmin/gitsunmin.github.io.git
git add *
git commit -m "publish"
git push origin master -f