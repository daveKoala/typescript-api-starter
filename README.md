# Project: name

## Install and run

### Clone
```
git clone {{repo url}}
```
### Install
```
npm install
```
### Settings
### Start Developer mode
```
npm run dev
```
### Build with environments
```
npm run build
```
### Unit tests
There are two test commands.

```
npm run test:unit
```

Runs the unit tests are results are printed in the terminal

```
npm run test:reporter
```

Runs the unit tests as above but will also publish test results
#### NPM scripts
|Name	|Command   	|Description   	|
|---	|---	|---	|
|audit	|```npm run audit```|Audits the NPM production packages and errors on 'moderate' risks or higher|
|build|```npm run build```   	|Compiles JS files from TS into the ```./dist``` folder|
|dev|```npm run dev```  	|When developing use this. It restarts the server on any file changes|
|lint|```npm run lint```   	|ES Linter and will try to fix errors|
|pre|```npm run pre```   	|Run audit, lint, test:unit and build|
|test:unit|```npm run test:unit```   	|Runs all the unit tests|
|test:reporter|```npm run test:reporter```   	|Runs all the unit tests and publishes results ```./TEST-RESULTS {{date}}.xml```|
## API versioning
What API version is called by the client is controlled by a key value pair in the request header.
```
{"Accept-version": <version>}
```
If no key value pair is found or the version does not exist then an error is returned
### Version implementation
Version implementation has 