"use strict";

/**
 * @namespace AddonName
 */

/**
 * @function validate
 * @description validate and return a boolean to tell if the name is a valid and acceptable name for SlimIO.
 * @memberof AddonName#
 * @param {!string} addonName
 * @returns {boolean}
 *
 * @example
 * const assert = require("assert").strict;
 *
 * assert.equal(validate("Addon"), false);
 * assert.equal(validate("myaddon5"), true);
 * assert.equal(validate("1"), false);
 */
function validate(addonName) {
    if (typeof addonName !== "string") {
        return false;
    }

    return /^[0-9a-z]{2,30}$/g.test(addonName);
}

/**
 * @function sanitize
 * @description remove non-valid (wide) characters from a given string.
 * @memberof AddonName#
 * @param {!string} addonName
 * @returns {string}
 *
 * @throws {TypeError}
 *
 * @example
 * const assert = require("assert").strict;
 *
 * assert.equal(sanitize("Addon-Name"), "addonname");
 */
function sanitize(addonName) {
    if (typeof addonName !== "string") {
        throw new TypeError("addonName must be a string");
    }

    return addonName.replace(/[^0-9a-z]/gi, "").trim().toLowerCase().normalize();
}

module.exports = { validate, sanitize };
