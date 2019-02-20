'use strict';

import { FmHtmlHead } from './fm-html-head';

export class FmHtmlDocument {
    protected htmlHead: FmHtmlHead;

    public constructor({ htmlHead }: any) {
        this.setHtmlHead(htmlHead);
    }

    public setHtmlHead(htmlHead: any) {
        if (htmlHead) {
            this.htmlHead = new FmHtmlHead(htmlHead);
        }
    }

    public getHtmlHead(): FmHtmlHead {
        return this.htmlHead;
    }
}
