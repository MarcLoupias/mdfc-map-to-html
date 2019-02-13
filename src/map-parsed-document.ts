'use strict';

import { MarkedOptions } from 'marked';
import {
    MdParsedDocument, TargetDocument, MapParsedDocumentFnType, UnConfiguredMapParsedDocumentFnType
} from 'md-file-converter';

export function makeUnConfiguredMapParsedDocument({ marked }: any): UnConfiguredMapParsedDocumentFnType {
    return (conf: { markedOptions: MarkedOptions }): MapParsedDocumentFnType => {
        return (mdParsedDocument: MdParsedDocument): TargetDocument => {
            const htmlBody = marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions);

            return TargetDocument.createTargetDocument({
                documentPaths: mdParsedDocument.documentPaths,
                transformedData: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${mdParsedDocument.documentPaths.basename}</title></head><body>${htmlBody}</body></html>`,
                fmMetaData: mdParsedDocument.fmMetaData
            });
        };
    };
}
