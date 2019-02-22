'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class FmScript {
    constructor({ src, async, defer, crossorigin, text }) {
        this.src = src || '';
        this.async = async || false;
        this.defer = defer || false;
        this.crossorigin = crossorigin || '';
        this.text = text || '';
    }
}
exports.FmScript = FmScript;
