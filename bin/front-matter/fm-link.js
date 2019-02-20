'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class FmLink {
    constructor({ href, rel, media, sizes, type, crossorigin, as, title }) {
        this.href = href || '';
        this.rel = rel || '';
        this.media = media || '';
        this.sizes = sizes || '';
        this.type = type || '';
        this.crossorigin = crossorigin || '';
        this.as = as || '';
        this.title = title || '';
    }
}
exports.FmLink = FmLink;
