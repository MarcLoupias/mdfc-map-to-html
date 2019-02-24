'use strict';

/*
 * inline level
 */

function link(href: string, title: string, text: string): string {
    if (href.substring(href.length - 3, href.length) === '.md') {
        const htmlHref = href.substring(0, href.length - 2) + 'html';
        return `<a href="${htmlHref}">${text}</a>`;
    }

    return `<a href="${href}">${text}</a>`;
}

export default {
    link
};
