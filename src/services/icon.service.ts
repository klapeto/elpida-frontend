import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IconService {

    public templateMap: { [name: string]: TemplateRef<any> } = {};

    public constructor() {
    }
}
