'use strict';

import { FmLink } from './fm-link';
import { FmMeta } from './fm-meta';

export class FmHtmlHead {
    public title?: string;
    public containerClass?: string;
    protected links: FmLink[];
    protected metaTags: FmMeta[];

    public constructor({ title, containerClass, links, metaTags }: any) {
        this.title = title || '';
        this.containerClass = containerClass || '';
        this.setLinks(links);
        this.setMetaTags(metaTags);
    }

    public setLinks(links: any) {
        this.links = (links) ? [...links.map((link: any) => new FmLink(link))] as FmLink[] : [];
    }

    public getLinks(): FmLink[] {
        return this.links;
    }

    public setMetaTags(metaTags: any) {
        this.metaTags = (metaTags) ? [...metaTags.map((metaTag: any) => new FmMeta(metaTag))] as FmMeta[] : [];
    }

    public getMetaTags(): FmMeta[] {
        return this.metaTags;
    }
}
