"use strict";

/**
 * @namespace AddonName
 */

// CONSTANTS
const VALIDATE_REGEX = "^[0-9a-z]{2,30}$";

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

/**
 * @function decamelize
 * @memberof Utils#
 * @description decamelize a given string
 * @param {!string} text
 * @returns {string}
 */
function decamelize(text) {
    if (typeof text !== "string") {
        throw new TypeError("text must be a string");
    }

    return text
        .replace(/([\p{Ll}\d])(\p{Lu})/gu, "$1_$2")
        .replace(/(\p{Lu}+)(\p{Lu}[\p{Ll}\d]+)/gu, "$1_$2")
        .toLowerCase();
}


module.exports = {
    validate,
    sanitize,
    decamelize,
    CONSTANTS: Object.freeze({ VALIDATE_REGEX })
};
