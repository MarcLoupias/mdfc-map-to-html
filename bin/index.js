'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
const marked_renderer_html_impl_1 = require("./marked-renderer-html-impl");
const map_parsed_document_1 = require("./map-parsed-document");
const parse_lexered_document_1 = require("./parse-lexered-document");
const map_parsed_document_utils_1 = require("./map-parsed-document-utils");
const unConfiguredMapParsedDocument = map_parsed_document_1.makeUnConfiguredMapParsedDocument({ buildTitle: map_parsed_document_utils_1.buildTitle, buildLinkTags: map_parsed_document_utils_1.buildLinkTags, buildContainerClass: map_parsed_document_utils_1.buildContainerClass })({ marked });
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
        this.parseLexeredDocument = parse_lexered_document_1.parseLexeredDocument;
        this.unConfiguredMapParsedDocument = unConfiguredMapParsedDocument;
    }
}
exports.default = new MapToHtmlImplPkg();
