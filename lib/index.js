/**
 * This file is part of node-port-validator
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */


const {PortValidator, portValidator} = require('./port-validator');
const {PortValidatorError} = require('./port-validator-error');

module.exports = {};
module.exports.PortValidator = PortValidator;
module.exports.portValidator = portValidator;
module.exports.PortValidatorError = PortValidatorError;
