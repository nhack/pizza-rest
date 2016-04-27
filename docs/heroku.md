First time deployment:

*   create heroku app: `yo angular-fullstack:heroku`
*   install mongolab: `cd dist && heroku addons:add mongolab`
*   restart app: `cd dist && heroku restart`

In order to deploy to heroku:

*   add ssh key: `ssh-add ~/.ssh/github_rsa`, use pass: f4e42d349afda9f9078699eded3be3a23c93fdfc
*   build the project: `grunt build`
*   deploy to heroku: `grunt buildcontrol:heroku`
*   open heroku: `cd dist && heroku open`
*   connect to db: `mongo ds063929.mongolab.com:63929/heroku_app36399192 -u mcristea -p suiraM12eram`
*   view logs: `cd dist && heroku logs`
*   connect via ssh: `cd dist && heroku run bash`
