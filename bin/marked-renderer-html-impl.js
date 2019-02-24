'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function link(href, title, text) {
    if (href.substring(href.length - 3, href.length) === '.md') {
        const htmlHref = href.substring(0, href.length - 2) + 'html';
        return `<a href="${htmlHref}">${text}</a>`;
    }
    return `<a href="${href}">${text}</a>`;
}
exports.default = {
    link
};
