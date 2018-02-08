/**
 * This file is part of node-port-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const should = require('should'); // eslint-disable-line no-unused-vars

const {PortValidator, portValidator} = require('../lib/port-validator');
const {PortValidatorError} = require('../lib/port-validator-error');

describe('Class named {PortValidator}', () => {
  it('should be a function', () => {
    (PortValidator).should.be.a.Function();
  });
});

describe('Factory function named {portValidator}', () => {
  it('should be a function', () => {
    (portValidator).should.be.a.Function();
  });
  it('should return an instance of {PortValidator} when calling using a valid port number {string}', () => {
    (portValidator('100')).should.be.an.instanceOf(PortValidator);
  });
  it('should return an instance of {PortValidator} when calling using a valid port number {number}', () => {
    (portValidator(100)).should.be.an.instanceOf(PortValidator);
  });
  it('should return an instance of {PortValidator} when calling using a invalid port number {string}', () => {
    (portValidator('poulet')).should.be.an.instanceOf(PortValidator);
  });
  it('should return an instance of {PortValidator} when calling using a invalid port number {number}', () => {
    (portValidator(-1024)).should.be.an.instanceOf(PortValidator);
  });
});


describe('Instantiate a {PortValidator}', () => {
  it('passing a {null} value should throw a {TypeError}', () => {
    (() => {
      new PortValidator(null)
    }).should.throw(PortValidatorError);
  });

  it('passing an {object} value should throw a {PortValidator}', () => {
    (() => {
      new PortValidator({})
    }).should.throw(PortValidatorError);
  });

  it('passing an {array} value should throw a {PortValidator}', () => {
    (() => {
      new PortValidator([])
    }).should.throw(PortValidatorError);
  });
});

describe('Validate a correct port number', () => {
  it('passing {string} should be {true}', () => {
    (new PortValidator('1024').validate()).should.be.true();
  });
  it('passing {string} with useless spaces should be {true}', () => {
    (new PortValidator('   1024   ').validate()).should.be.true();
  });
  it('passing {number} should be {true}', () => {
    (new PortValidator(1024).validate()).should.be.true();
  });
});

describe('Validate a fake port number', () => {
  it('passing {string} should be {false}', () => {
    (new PortValidator('65537').validate()).should.be.false();
  });
  it('passing {string} with useless spaces should be {false}', () => {
    (new PortValidator('   65537   ').validate()).should.be.false();
  });

  it('passing {negative number} should be {false}', () => {
    (new PortValidator(-1).validate()).should.be.false();
  });

  it('passing {number} should be {false}', () => {
    (new PortValidator(65536).validate()).should.be.false();
  });
});
