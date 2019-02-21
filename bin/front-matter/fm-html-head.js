'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fm_link_1 = require("./fm-link");
class FmHtmlHead {
    constructor({ title, containerClass, links }) {
        this.title = title || '';
        this.containerClass = containerClass || '';
        this.setLinks(links);
    }
    setLinks(links) {
        this.links = (links) ? [...links.map((link) => new fm_link_1.FmLink(link))] : [];
    }
    getLinks() {
        return this.links;
    }
}
exports.FmHtmlHead = FmHtmlHead;
