/**
 * This file is part of node-port-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const _ = require('lodash');

const {PortValidatorError} = require('./port-validator-error');

/**
 * {PortValidator} class.
 *
 * @class
 * @public
 */
class PortValidator {

  /**
   * Create a new instance of {PortValidator}.
   *
   * @param value {string|number} - A port for network communications.
   * @returns {PortValidator} - An instance of {PortValidator}.
   * @constructor
   * @public
   */
  constructor(value) {
    PortValidator.checkParameters(value);
    this.value = PortValidator.convertPortNumberToInteger(value);
  }

  /**
   * Check if provided parameter(s) are correctly typed.
   *
   * @param value - The value.
   */
  static checkParameters(value) {
    if ((_.isString(value) === false) && (_.isInteger(value) === false)) {
      throw new PortValidatorError(`Parameter <value> must be of type {string|number}. Founded: ${value}`);
    }
  }

  /**
   * Convert the provided value as an integer.
   *
   * @param value {string|number} - A port number.
   * @returns {number}
   */
  static convertPortNumberToInteger(value) {
    if (_.isInteger(value)) {
      return value;
    }
    return parseInt(value.trim());
  }

  /**
   * Validate the port formatting.
   *
   * @returns {boolean} True if the port formatting is correct. False else.
   */
  validate() {
    return ((this.value >= 0) && (this.value < (Math.pow(2, 16))));
  }

  /**
   * A factory for {PortValidator}.
   *
   * @param value {string|number} - The port number to validate.
   * @returns {PortValidator} An instance of {PortValidator}.
   */
  static factory(value) {
    return new PortValidator(value);
  }

}


/**
 * A factory for {PortValidator}.
 *
 * @param value {string|number} - The port number to validate.
 * @function
 * @public
 */
function portValidator(value) {
  return PortValidator.factory(value);
}

module.exports = {};
module.exports.PortValidator = PortValidator;
module.exports.portValidator = portValidator;
