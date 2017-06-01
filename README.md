## React native testing sample with JEST and Enzyme

This repo provide a sample app for starting testing on react native application using JEST and Enzyme


#### Little things need to understand

Before we talk about Enzyme and Jest, we should understand a few terms related to testing

##### Test runner
- A tool that picks up files that contain unit tests, executes them, and writes the test results to the console or log files. Mocha and Jasmine are two popular test runners used within the JavaScript community.
##### Assertion library
- This librarby verifies the results of a test. Chai, Should, and Expect are examples of JavaScript assertion libraries.
##### Mocks
- A component under test has many dependencies. These dependencies are usually replaced by stubs or mocks. Stubs simulate a dependent object. Mocks offer an additional feature over stubs. With mocks, tests can be written to verify if the component under test has called the mocks as expected.
##### Mocking library
- Facilitates the usage of mocks in unit testing. Sinon and TestDouble are commonly used JavaScript mocking libraries.

### Enzyme and JEST
- Enzyme is a testing library to render the react component into the DOM and query the DOM tree. Its a testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.
- Jest is a unit testing framework and has a test runner, assertion library, and mocking support.


From react-native 0.38 jest default setup included in the base project.
To test this, run npm test and Jest is up and running
```
npm test
```
### Commands Used

#### Commit: initial commit aaded vanilla react native code and readme file
```
react-native run-ios
```
#### Commit : install jest run, enzyme and other dependencies
```
npm i --save-dev jest
npm i --save-dev jest-cli
npm i --save-dev enzyme
npm i --save-dev react-addons-test-utils
npm i --save-dev react-dom
```
**Cheers!**
