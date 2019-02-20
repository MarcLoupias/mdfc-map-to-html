'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const md_file_converter_1 = require("md-file-converter");
const front_matter_1 = require("./front-matter");
function parseLexeredDocument(mdLexeredDocument) {
    return md_file_converter_1.MdParsedDocument.createMdParsedDocument({
        documentPaths: md_file_converter_1.DocumentPaths.createDocumentPaths({ ...mdLexeredDocument.documentPaths }),
        parsedTokensList: mdLexeredDocument.tokensList,
        fmMetaData: (mdLexeredDocument.fmMetaData) ? new front_matter_1.FmHtmlDocument(mdLexeredDocument.fmMetaData) : mdLexeredDocument.fmMetaData
    });
}
exports.parseLexeredDocument = parseLexeredDocument;
