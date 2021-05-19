# Test build setup
A simple setup for ensuring testing in SFCC/SFRA projects. This can further be extended as per the project needs.

# setup
npm install

# Run build command
This command builds and then executes the test cases along with coverage.
```
npm run build
```

# For just installing a test framework in you projects
```
npm i jest --save-dev
```

# Common build command to run the todolist.html
```
gulp
```
The above code compiles the index.js and places it in static folder as index.js. This index.js is included in the todolist.html file.

# Steps
For every js files created an equivalent test files with nameing format as [filename].test.js needs to be created.

To play around, open index.html, it contains a simple todo app (half done) to show how jquery can be tested.

To run the test cases and build, a single command as shown above needs to be executed.
```
npm run build
```
For new test cases related to the same todo app you can write more such in the todolist.test.js

The todolist.test.js contains one suite and 2 tests.

The coverage folder contains the code coverage. You need to open index.html inside 
```
coverage > Icov-report > index.html
```
