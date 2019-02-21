'use strict';

import * as marked from 'marked';

import markedRendererHtmlImpl from './marked-renderer-html-impl';
import { makeUnConfiguredMapParsedDocument } from './map-parsed-document';
import {
    IImplPkgBasic, IImplPkgParser, IImplPkgMapper, ParseLexeredDocumentFnType, UnConfiguredMapParsedDocumentFnType
} from 'md-file-converter';
import { parseLexeredDocument } from './parse-lexered-document';
import { buildTitle, buildLinkTags, buildMetaTags, buildContainerClass } from './map-parsed-document-utils';

const unConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument({ buildTitle, buildLinkTags, buildMetaTags, buildContainerClass })({ marked });
const targetDocumentFileExtension = '.html';
const markedRenderer: marked.Renderer = Object.assign(
    new marked.Renderer(),
    { ...markedRendererHtmlImpl }
);
const markedOptions: marked.MarkedOptions = {
    renderer: markedRenderer,
    langPrefix: '',
    smartypants: true,
    gfm: true,
    breaks: true,
    tables: true
};

class MapToHtmlImplPkg implements IImplPkgBasic, IImplPkgParser, IImplPkgMapper {
    public markedOptions: marked.MarkedOptions = markedOptions;
    public targetDocumentFileExtension: string = targetDocumentFileExtension;
    public parseLexeredDocument: ParseLexeredDocumentFnType = parseLexeredDocument;
    public unConfiguredMapParsedDocument: UnConfiguredMapParsedDocumentFnType = unConfiguredMapParsedDocument;
}

export default new MapToHtmlImplPkg();
