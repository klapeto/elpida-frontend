import {TemplateRef} from '@angular/core';

export class TabModel {
    constructor(public title: TemplateRef<any>,
                public content: TemplateRef<any>) {
    }
}
