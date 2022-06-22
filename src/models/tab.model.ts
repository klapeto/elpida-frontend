import {TemplateRef} from '@angular/core';

export class TabModel {
    public constructor(public title: TemplateRef<any>,
                public content: TemplateRef<any>) {
    }
}
