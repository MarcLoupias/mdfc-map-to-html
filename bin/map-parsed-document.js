'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
function makeUnConfiguredMapParsedDocument({ marked }) {
    return (conf) => {
        return (mdParsedDocument) => {
            const htmlBody = marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions);
            return md_file_converter_1.TargetDocument.createTargetDocument({
                documentPaths: mdParsedDocument.documentPaths,
                transformedData: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${mdParsedDocument.documentPaths.basename}</title></head><body>${htmlBody}</body></html>`,
                fmMetaData: mdParsedDocument.fmMetaData
            });
        };
    };
}
exports.makeUnConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument;
