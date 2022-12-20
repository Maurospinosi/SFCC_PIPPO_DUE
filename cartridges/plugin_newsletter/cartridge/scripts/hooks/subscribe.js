'use strict';

var CustomObjectMgr = require('dw/object/CustomObjectMgr');

/**
 * validates the current users basket
 * @param {String} email - The current user's basket
 * @returns {Object} an error object
 */
function subscribe(email) {
    var customObj = CustomObjectMgr.createCustomObject('Newsletter_Forms', email.toLowerCase());
}

module.exports = {
  subscribe
};