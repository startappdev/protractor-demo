protractor-demo
===============

Demo test application and protractor tests.
Modified for testing e2e test writer candidates

Setup
-----

    git clone git@github.com:startappdev/protractor-demo.git
    cd protractor-demo
    npm install

To run
------
Get ChromeDriver set up: Run `./node_modules/.bin/webdriver-manager update`.

Start the test application server with `npm start` (runs `node app/expressserver.js`)

Run the tests with `npm test` (runs `node_modules/.bin/protractor test/conf.js`)
