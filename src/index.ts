'use strict';

import * as marked from 'marked';

import markedRendererHtmlImpl from './marked-renderer-html-impl';
import { makeUnConfiguredMapParsedDocument } from './map-parsed-document';
import { IImplPkgBasic, IImplPkgMapper, UnConfiguredMapParsedDocumentFnType } from 'md-file-converter';

const unConfiguredMapParsedDocument = makeUnConfiguredMapParsedDocument({ marked });
const targetDocumentFileExtension = '.html';
const markedRenderer: marked.Renderer = Object.assign(
    new marked.Renderer(),
    { ...markedRendererHtmlImpl }
);
const markedOptions: marked.MarkedOptions = {
    renderer: markedRenderer,
    smartypants: true,
    gfm: true,
    breaks: true,
    tables: true
};

class MapToHtmlImplPkg implements IImplPkgBasic, IImplPkgMapper {
    public markedOptions: marked.MarkedOptions = markedOptions;
    public targetDocumentFileExtension: string = targetDocumentFileExtension;
    public unConfiguredMapParsedDocument: UnConfiguredMapParsedDocumentFnType = unConfiguredMapParsedDocument;
}

export default new MapToHtmlImplPkg();
