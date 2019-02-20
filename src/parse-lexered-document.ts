'use strict';

import { DocumentPaths, MdLexeredDocument, MdParsedDocument } from 'md-file-converter';
import { FmHtmlDocument } from './front-matter';

export function parseLexeredDocument(mdLexeredDocument: MdLexeredDocument): MdParsedDocument {
    return MdParsedDocument.createMdParsedDocument({
        documentPaths: DocumentPaths.createDocumentPaths({...mdLexeredDocument.documentPaths}),
        parsedTokensList: mdLexeredDocument.tokensList,
        fmMetaData: (mdLexeredDocument.fmMetaData) ? new FmHtmlDocument(mdLexeredDocument.fmMetaData) : mdLexeredDocument.fmMetaData
    });
}
