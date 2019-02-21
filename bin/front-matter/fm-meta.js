'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class FmMeta {
    constructor({ name, property, httpEquiv, content }) {
        this.name = name || '';
        this.property = property || '';
        this.httpEquiv = httpEquiv || '';
        this.content = content || '';
    }
}
exports.FmMeta = FmMeta;
