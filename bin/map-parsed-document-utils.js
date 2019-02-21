'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function buildLinkTags(fmHtmlDocument) {
    if (!fmHtmlDocument || !fmHtmlDocument.getHtmlHead()) {
        return '';
    }
    if (!fmHtmlDocument.getHtmlHead().getLinks() || fmHtmlDocument.getHtmlHead().getLinks().length < 1) {
        return '';
    }
    let linkTags = '';
    fmHtmlDocument.getHtmlHead().getLinks().forEach((element) => {
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
exports.buildLinkTags = buildLinkTags;
function buildContainerClass(fmHtmlDocument) {
    if (!fmHtmlDocument || !fmHtmlDocument.getHtmlHead() || !fmHtmlDocument.getHtmlHead().containerClass) {
        return '';
    }
    return ` class="${fmHtmlDocument.getHtmlHead().containerClass}"`;
}
exports.buildContainerClass = buildContainerClass;
