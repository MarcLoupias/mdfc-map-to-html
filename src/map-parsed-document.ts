'use strict';

import { MarkedOptions } from 'marked';
import {
    MdParsedDocument, TargetDocument, MapParsedDocumentFnType, UnConfiguredMapParsedDocumentFnType
} from 'md-file-converter';
import { FmHtmlDocument } from './front-matter';

export function makeUnConfiguredMapParsedDocument({ buildTitle, buildLinkTags, buildContainerClass }: any) {
    return ({ marked }: any): UnConfiguredMapParsedDocumentFnType => {
        return (conf: { markedOptions: MarkedOptions }): MapParsedDocumentFnType => {
            return (mdParsedDocument: MdParsedDocument): TargetDocument => {
                const htmlBody = marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions);
                const linkTags = buildLinkTags(mdParsedDocument.fmMetaData as FmHtmlDocument);
                let title = buildTitle(mdParsedDocument.fmMetaData as FmHtmlDocument);
                title = (title) ? title : mdParsedDocument.documentPaths.basename;
                const containerClass = buildContainerClass(mdParsedDocument.fmMetaData as FmHtmlDocument);

                return TargetDocument.createTargetDocument({
                    documentPaths: mdParsedDocument.documentPaths,
                    transformedData: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title>${linkTags}</head><body><article${containerClass}>${htmlBody}</article></body></html>`,
                    fmMetaData: mdParsedDocument.fmMetaData
                });
            };
        };
    };
}
