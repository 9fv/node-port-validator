/**
 * This file is part of node-port-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * A custom error for {PortValidator}.
 *
 * @public
 * @class
 */
class PortValidatorError extends Error {

  /**
   * Create a new instance of {PortValidatorError}.
   *
   * @param args - The arguments.
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }
}

module.exports = {};
module.exports.PortValidatorError = PortValidatorError;
