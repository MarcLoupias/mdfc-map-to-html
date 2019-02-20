'use strict';

export class FmLink {
    public href?: string;
    public rel?: string;
    public media?: string;
    public sizes?: string;
    public type?: string;
    public crossorigin?: string;
    public as?: string;
    public title?: string;

    public constructor({ href, rel, media, sizes, type, crossorigin, as, title }: any) {
        this.href = href || '';
        this.rel = rel || '';
        this.media = media || '';
        this.sizes = sizes || '';
        this.type = type || '';
        this.crossorigin = crossorigin || '';
        this.as = as || '';
        this.title = title || '';
    }
}
