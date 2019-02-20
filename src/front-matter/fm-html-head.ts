'use strict';

import { FmLink } from './fm-link';

export class FmHtmlHead {
    public containerClass?: string;
    protected links: FmLink[];

    public constructor({ containerClass, links }: any) {
        this.containerClass = containerClass || '';
        this.setLinks(links);
    }

    public setLinks(links: any) {
        this.links = (links) ? [...links.map((link: any) => new FmLink(link))] as FmLink[] : [];
    }

    public getLinks(): FmLink[] {
        return this.links;
    }
}
