'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fm_link_1 = require("./fm-link");
const fm_meta_1 = require("./fm-meta");
const fm_script_1 = require("./fm-script");
class FmHtmlHead {
    constructor({ title, containerClass, links, metaTags, scripts }) {
        this.title = title || '';
        this.containerClass = containerClass || '';
        this.setLinks(links);
        this.setMetaTags(metaTags);
        this.setScripts(scripts);
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
    setScripts(scripts) {
        this.scripts = (scripts) ? [...scripts.map((script) => new fm_script_1.FmScript(script))] : [];
    }
    getScripts() {
        return this.scripts;
    }
}
exports.FmHtmlHead = FmHtmlHead;
