'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fm_link_1 = require("./fm-link");
const fm_meta_1 = require("./fm-meta");
class FmHtmlHead {
    constructor({ title, containerClass, links, metaTags }) {
        this.title = title || '';
        this.containerClass = containerClass || '';
        this.setLinks(links);
        this.setMetaTags(metaTags);
    }
    setLinks(links) {
        this.links = (links) ? [...links.map((link) => new fm_link_1.FmLink(link))] : [];
    }
    getLinks() {
        return this.links;
    }
    setMetaTags(metaTags) {
        this.metaTags = (metaTags) ? [...metaTags.map((metaTag) => new fm_meta_1.FmMeta(metaTag))] : [];
    }
    getMetaTags() {
        return this.metaTags;
    }
}
exports.FmHtmlHead = FmHtmlHead;
