'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
function makeUnConfiguredMapParsedDocument({ buildTitle, buildLinkTags, buildMetaTags, buildContainerClass, buildScripts }) {
    return ({ marked }) => {
        return (conf) => {
            return (mdParsedDocument) => {
                const htmlBody = marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions);
                const linkTags = buildLinkTags(mdParsedDocument.fmMetaData);
                const metaTags = buildMetaTags(mdParsedDocument.fmMetaData);
                let title = buildTitle(mdParsedDocument.fmMetaData);
                title = (title) ? title : mdParsedDocument.documentPaths.basename;
                const containerClass = buildContainerClass(mdParsedDocument.fmMetaData);
                const scriptTags = buildScripts(mdParsedDocument.fmMetaData);
                return md_file_converter_1.TargetDocument.createTargetDocument({
                    documentPaths: mdParsedDocument.documentPaths,
                    transformedData: `<!DOCTYPE html><html><head><meta charset="utf-8">${metaTags}<title>${title}</title>${linkTags}${scriptTags}</head><body><article${containerClass}>${htmlBody}</article></body></html>`,
                    fmMetaData: mdParsedDocument.fmMetaData
                });
            };
        };
    };
}
exports.makeUnConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument;
