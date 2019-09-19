"use strict";

// Require Third-party Dependencies
const test = require("japa");
const is = require("@slimio/is");

// Require Internal Dependencies
const validateAddonName = require("../index");
const { validate, sanitize, CONSTANTS } = validateAddonName;

test("module.exports", (assert) => {
    assert.isTrue(is.plainObject(validateAddonName));
    assert.deepEqual(Object.keys(validateAddonName), [
        "validate",
        "sanitize",
        "CONSTANTS"
    ]);
});

test("CONSTANTS", (assert) => {
    assert.isTrue(Object.isFrozen(CONSTANTS));
    assert.deepEqual(Object.keys(CONSTANTS), ["VALIDATE_REGEX"]);
    assert.isTrue(typeof CONSTANTS.VALIDATE_REGEX === "string");
});

test("validate", (assert) => {
    assert.strictEqual(validate({}), false);
    assert.strictEqual(validate(10), false);
    assert.strictEqual(validate("Addon"), false);
    assert.strictEqual(validate("cpu-db"), false);
    assert.strictEqual(validate("ok"), true);
    assert.strictEqual(validate("n"), false);
    assert.strictEqual(validate("myaddonname"), true);
    assert.strictEqual(validate("hello".repeat(15)), false);
});

test("sanitize must throw if addonName is not a string", (assert) => {
    assert.plan(2);

    try {
        sanitize(10);
    }
    catch (error) {
        assert.strictEqual(error.name, "TypeError");
        assert.strictEqual(error.message, "addonName must be a string");
    }
});

test("sanitize", (assert) => {
    assert.strictEqual(sanitize("CPU-DB>>"), "cpudb");
    assert.strictEqual(sanitize("AddonName"), "addonname");
});

