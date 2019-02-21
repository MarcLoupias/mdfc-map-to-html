'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
function makeUnConfiguredMapParsedDocument({ buildLinkTags, buildContainerClass }) {
    return ({ marked }) => {
        return (conf) => {
            return (mdParsedDocument) => {
                const htmlBody = marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions);
                const linkTags = buildLinkTags(mdParsedDocument.fmMetaData);
                const containerClass = buildContainerClass(mdParsedDocument.fmMetaData);
                return md_file_converter_1.TargetDocument.createTargetDocument({
                    documentPaths: mdParsedDocument.documentPaths,
                    transformedData: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${mdParsedDocument.documentPaths.basename}</title>${linkTags}</head><body><article${containerClass}>${htmlBody}</article></body></html>`,
                    fmMetaData: mdParsedDocument.fmMetaData
                });
            };
        };
    };
}
exports.makeUnConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument;
