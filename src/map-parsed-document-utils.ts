'use strict';

import { FmHtmlDocument, FmLink, FmMeta } from './front-matter';

export function buildLinkTags(fmHtmlDocument: FmHtmlDocument): string {
    if (!fmHtmlDocument || !fmHtmlDocument.getHtmlHead()) {
        return '';
    }
    if (!fmHtmlDocument.getHtmlHead().getLinks() || fmHtmlDocument.getHtmlHead().getLinks().length < 1) {
        return '';
    }

    let linkTags = '';
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

    return linkTags;
}

export function buildContainerClass(fmHtmlDocument: FmHtmlDocument): string {
    if (!fmHtmlDocument || !fmHtmlDocument.getHtmlHead() || !fmHtmlDocument.getHtmlHead().containerClass) {
        return '';
    }

    return ` class="${fmHtmlDocument.getHtmlHead().containerClass}"`;
}

export function buildTitle(fmHtmlDocument: FmHtmlDocument): string {
    if (!fmHtmlDocument || !fmHtmlDocument.getHtmlHead() || !fmHtmlDocument.getHtmlHead().title) {
        return '';
    }

    return fmHtmlDocument.getHtmlHead().title;
}

export function buildMetaTags(fmHtmlDocument: FmHtmlDocument): string {
    if (!fmHtmlDocument || !fmHtmlDocument.getHtmlHead()) {
        return '';
    }
    if (!fmHtmlDocument.getHtmlHead().getMetaTags() || fmHtmlDocument.getHtmlHead().getMetaTags().length < 1) {
        return '';
    }

    let metaTags = '';
    fmHtmlDocument.getHtmlHead().getMetaTags().forEach((element: FmMeta) => {
        let metaTag = '';
        metaTag += '<meta';
        metaTag += (element.name) ? ` name="${element.name}"` : '';
        metaTag += (element.property) ? ` property="${element.property}"` : '';
        metaTag += (element.httpEquiv) ? ` http-equiv="${element.httpEquiv}"` : '';
        metaTag += (element.content) ? ` content="${element.content}"` : '';
        metaTag += '>';

        metaTags += metaTag;
    });

    return metaTags;
}
