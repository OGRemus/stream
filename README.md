# team2

This is a POC cypress TAU framework that tests Streamo platform. 

## Getting started

1. To setup the framework use npm install


## Test files

There are 5 test files that test the critical functionalities: login/logout, price list test, watch a movie test and send contact form
There is also an API tests for submitting contact form 

## Running the tests

To run the tests you need firstly to provide the user and password for the test user such as: 
user= <insertYouruser>
pass= <insertYourPass>

Therefore, to run the regression test package you can use the following command

user=<insertYourUser> pass=<insertYourPass> npm run regression

## Reporting, videos and screenshots

For reporting means we use mochawesome reporter. After each test run, a report will be generated inside the reports folder
Moreover, screenrecordings and screenshots of failures will be stored in a folder respectively.





