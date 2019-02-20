'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fm_html_head_1 = require("./fm-html-head");
class FmHtmlDocument {
    constructor({ htmlHead }) {
        this.setHtmlHead(htmlHead);
    }
    setHtmlHead(htmlHead) {
        if (htmlHead) {
            this.htmlHead = new fm_html_head_1.FmHtmlHead(htmlHead);
        }
    }
    getHtmlHead() {
        return this.htmlHead;
    }
}
exports.FmHtmlDocument = FmHtmlDocument;
