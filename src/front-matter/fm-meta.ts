'use strict';

export class FmMeta {
    public name?: string;
    public property?: string;
    public httpEquiv?: string;
    public content?: string;

    public constructor({ name, property, httpEquiv, content }: any) {
        this.name = name || '';
        this.property = property || '';
        this.httpEquiv = httpEquiv || '';
        this.content = content || '';
    }
}
