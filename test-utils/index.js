'use strict';

const spawnSync = require('child_process').spawnSync;
const assert = require('assert');

function executeSync(processPath, args = [], opts = {}) {
    return spawnSync(processPath, args, opts);
}

function executeCliSync(args, throwIfStdErr = true) {
    assert.ok(Array.isArray(args));

    const result = executeSync(
        './node_modules/.bin/mdfc',
        args,
        { encoding: 'utf-8' }
    );

    if (throwIfStdErr && result.stderr) {
        throw new Error(result.stderr);
    }

    return result;
}

module.exports = { executeCliSync };
