'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
const marked_renderer_html_impl_1 = require("./marked-renderer-html-impl");
const map_parsed_document_1 = require("./map-parsed-document");
const unConfiguredMapParsedDocument = map_parsed_document_1.makeUnConfiguredMapParsedDocument({ marked });
const targetDocumentFileExtension = '.html';
const markedRenderer = Object.assign(new marked.Renderer(), { ...marked_renderer_html_impl_1.default });
const markedOptions = {
    renderer: markedRenderer,
    langPrefix: '',
    smartypants: true,
    gfm: true,
    breaks: true,
    tables: true
};
class MapToHtmlImplPkg {
    constructor() {
        this.markedOptions = markedOptions;
        this.targetDocumentFileExtension = targetDocumentFileExtension;
        this.unConfiguredMapParsedDocument = unConfiguredMapParsedDocument;
    }
}
exports.default = new MapToHtmlImplPkg();
