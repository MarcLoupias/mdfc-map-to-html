'use strict';

export class FmScript {
    public src?: string;
    public async?: boolean;
    public defer?: boolean;
    public crossorigin?: string;
    public text?: string;

    public constructor({ src, async, defer, crossorigin, text }: any) {
        this.src = src || '';
        this.async = async || false;
        this.defer = defer || false;
        this.crossorigin = crossorigin || '';
        this.text = text || '';
    }
}
