[npm-badge]: https://img.shields.io/npm/v/port-validator.svg
[npm-badge-url]: https://www.npmjs.com/package/port-validator
[npm-downloads-badge]: https://img.shields.io/npm/dt/port-validator.svg
[npm-downloads-url]: https://npmjs.org/package/port-validator
[travis-badge]: https://img.shields.io/travis/9fv/node-port-validator/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/9fv/node-port-validator
[circle-badge]: https://circleci.com/gh/9fv/node-port-validator/tree/master.svg?style=svg&circle-token=
[circle-badge-url]: https://circleci.com/gh/9fv/node-port-validator/tree/master
[coveralls-badge]: https://coveralls.io/repos/github/9fv/node-port-validator/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/9fv/node-port-validator?branch=master
[codeclimate-badge]: https://img.shields.io/codeclimate/github/9fv/node-port-validator.svg
[codeclimate-badge-url]: https://codeclimate.com/github/9fv/node-port-validator
[ember-observer-badge]: http://emberobserver.com/badges/node-port-validator.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/node-port-validator
[license-badge]: https://img.shields.io/npm/l/port-validator.svg
[license-badge-url]: LICENSE.md
[dependencies-badge]: https://img.shields.io/david/9fv/node-port-validator.svg
[dependencies-badge-url]: https://david-dm.org/9fv/node-port-validator
[devDependencies-badge]: https://img.shields.io/david/dev/9fv/node-port-validator.svg
[devDependencies-badge-url]: https://david-dm.org/9fv/node-port-validator#info=devDependencies
[greenkeeper-badge]: https://badges.greenkeeper.io/9fv/node-port-validator.svg
[greenkeeper-badge-url]: https://greenkeeper.io/


node-port-validator
====================

[![Latest NPM release][npm-badge]][npm-badge-url]
[![NPM Downloads][npm-downloads-badge]][npm-downloads-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Test Coverage][coveralls-badge]][coveralls-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url] 
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-badge-url]

## Table of Contents

* [Synopsis](#synopsis)
* [Usage](#usage)
* [Installation](#installation)
* [API Reference](#api-reference)
* [Tests](#tests)
  * [Run unit tests](#tests_run-unit-tests)
* [Compatibility](#compatibility)
  * [Node](#compatibility_node)
  * [Browser](#compatibility_browser)
* [Issues](#issues)
* [Contributing](#contributing)
* [Credits](#credits)
* [History](#history)
* [License](#license)

## <a name="synopsis"> Synopsis

A port formatting validator.

## <a name="usage"> Usage

```javascript
   const {portValidator} = require('port-validator');

   portValidator('172.17.0.5').validate(); # false -> is not a port.
   portValidator(-256).validate(); # false -> is not a port.
   portValidator('66789').validate(); # false -> is not a port.

   portValidator('80').validate(); # true -> is a port.
   portValidator(443).validate(); # true -> is a port.

```

## <a name="installation"> Installation

    npm install port-validator

## <a name="api-reference"> API Reference

Please refer to [API documentation](docs/API.md).

## <a name="test"> Tests

### <a name="tests_run-unit-tests"> Run unit tests

    npm test

## <a name="compatibility"> Compatibility

### <a name="compatibility_node"> Node

Tested using [Node v9.5.0](https://nodejs.org/dist/v9.5.0/docs/api/).

### <a name="compatibility_browser"> Browser

Untested at this time.

## <a name="issues"> Issues

Feel free to submit issues and enhancement requests.

## <a name="contributing"> Contributing

Please refer to project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## <a name="credits"> Credits


## <a name="history"> History

### v0.1.0-alpha1 (2018-02-08)

Initial version.

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
