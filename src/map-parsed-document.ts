'use strict';

import { MarkedOptions } from 'marked';
import {
    MdParsedDocument, TargetDocument, MapParsedDocumentFnType, UnConfiguredMapParsedDocumentFnType
} from 'md-file-converter';
import { FmHtmlDocument, FmLink } from './front-matter';

export function makeUnConfiguredMapParsedDocument({ marked }: any): UnConfiguredMapParsedDocumentFnType {
    return (conf: { markedOptions: MarkedOptions }): MapParsedDocumentFnType => {
        return (mdParsedDocument: MdParsedDocument): TargetDocument => {
            const htmlBody = marked.parser(mdParsedDocument.parsedTokensList, conf.markedOptions);
            let linkTags = '';
            let containerClass = '';
            const fmHtmlDocument = mdParsedDocument.fmMetaData as FmHtmlDocument;
            if (fmHtmlDocument && fmHtmlDocument.getHtmlHead()) {
                if (fmHtmlDocument.getHtmlHead().containerClass) {
                    containerClass = ` class="${fmHtmlDocument.getHtmlHead().containerClass}"`;
                }
                if (fmHtmlDocument.getHtmlHead().getLinks() && fmHtmlDocument.getHtmlHead().getLinks().length > 0) {
                    fmHtmlDocument.getHtmlHead().getLinks().forEach((element: FmLink) => {
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

            return TargetDocument.createTargetDocument({
                documentPaths: mdParsedDocument.documentPaths,
                transformedData: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${mdParsedDocument.documentPaths.basename}</title>${linkTags}</head><body><article${containerClass}>${htmlBody}</article></body></html>`,
                fmMetaData: mdParsedDocument.fmMetaData
            });
        };
    };
}
