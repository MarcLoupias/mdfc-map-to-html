'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
function makeUnConfiguredMapParsedDocument({ marked }) {
    return (conf) => {
        return (mdParsedDocument) => {
            const htmlBody = marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions);
            let linkTags = '';
            let containerClass = '';
            const fmHtmlDocument = mdParsedDocument.fmMetaData;
            if (fmHtmlDocument && fmHtmlDocument.getHtmlHead()) {
                if (fmHtmlDocument.getHtmlHead().containerClass) {
                    containerClass = ` class="${fmHtmlDocument.getHtmlHead().containerClass}"`;
                }
                if (fmHtmlDocument.getHtmlHead().getLinks() && fmHtmlDocument.getHtmlHead().getLinks().length > 0) {
                    fmHtmlDocument.getHtmlHead().getLinks().forEach((element) => {
                        let linkTag = '';
                        linkTag += '<link';
                        linkTag += (element.href) ? ` href="${element.href}"` : '';
                        linkTag += (element.rel) ? ` rel="${element.rel}"` : '';
                        linkTag += (element.media) ? ` media="${element.media}"` : '';
                        linkTag += (element.sizes) ? ` sizes="${element.sizes}"` : '';
                        linkTag += (element.type) ? ` type="${element.type}"` : '';
                        linkTag += (element.crossorigin) ? ` crossorigin="${element.crossorigin}"` : '';
                        linkTag += (element.as) ? ` as="${element.as}"` : '';
                        linkTag += (element.title) ? ` title="${element.title}"` : '';
                        linkTag += '>';
                        linkTags += linkTag;
                    });
                }
            }
            return md_file_converter_1.TargetDocument.createTargetDocument({
                documentPaths: mdParsedDocument.documentPaths,
                transformedData: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${mdParsedDocument.documentPaths.basename}</title>${linkTags}</head><body><article${containerClass}>${htmlBody}</article></body></html>`,
                fmMetaData: mdParsedDocument.fmMetaData
            });
        };
    };
}
exports.makeUnConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument;
