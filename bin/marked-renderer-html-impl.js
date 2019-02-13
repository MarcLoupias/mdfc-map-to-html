'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function link(href, title, text) {
    const htmlHref = href.substring(0, href.length - 2) + 'html';
    return `<a href="${htmlHref}">${text}</a>`;
}
exports.default = {
    link
};
