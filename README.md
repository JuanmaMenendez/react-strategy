
## 💻 Desciption

This is a project to test commitzen, commitlint and semantic-release.


## 📦 Pre-requisites

In order semantic-release to work the CI/CD pipeline of Github needs to work so a proper github token is needed.

- Create a token and copy the value https://github.com/settings/tokens

- Set the value in:

a) ".env.local" file (created if it doesnt exist, I am not 100% sure this file is needed) 
   GITHUB_TOKEN=xxxxxx

b) in the gitpod enviroment if I am using it, add in the console:

   gp env GITHUB_TOKEN=xxxxxxxx
   eval $(gp env -e)



### 🧭 Run the app

$ npm install
$ npm start


### ⚒️ Test the tools

Make any change in a file
git add .

//test commitzen
npm run commit

//test commitlint
git commit -m 'this is an incorrect message format'

//test semantic-release (check the changelog file, the published package and the project version)
npm run release

