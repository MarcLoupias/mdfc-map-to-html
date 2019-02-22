'use strict';

import { FmLink } from './fm-link';
import { FmMeta } from './fm-meta';
import { FmScript } from './fm-script';

export class FmHtmlHead {
    public title?: string;
    public containerClass?: string;
    protected links: FmLink[];
    protected metaTags: FmMeta[];
    protected scripts: FmScript[];

    public constructor({ title, containerClass, links, metaTags, scripts }: any) {
        this.title = title || '';
        this.containerClass = containerClass || '';
        this.setLinks(links);
        this.setMetaTags(metaTags);
        this.setScripts(scripts);
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

    public setScripts(scripts: any) {
        this.scripts = (scripts) ? [...scripts.map((script: any) => new FmScript(script))] as FmScript[] : [];
    }

    public getScripts(): FmScript[] {
        return this.scripts;
    }
}
