A boilerplate for freecodecamp's backend challenges with passport configured for Github login.

- you will need to change the bin/www line 9 require debug to you app name:
    for example:
        var debug = require('debug')('fcc-boilerplate-mine:server');
                        ||
                        \/
        var debug = require('debug')('<your-app-name>:server');
      replace <your-app-name> with your app's name

- change the name in package.json file from 'fcc-boilerplate-mine' to your app name '<your-app-name>

- Set up github app by flowing the step in http://www.clementinejs.com/tutorials/tutorial-passport.html#GitHubAppSetup.
- After completeing the steps in above create an .env file in root directory.
    ===>
    GITHUB_KEY=<your-github-key>
    GITHUB_SECRET=<your-github-secret-key>
    MONGO_URI=<database-uri>
    APP_URL=http://localhost:3000/
    COOKIE_KEY=<secret-key-for-cookie-session> example => COOKIE_KEY=helloworld
