import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {IconService} from '../services/icon.service';

@Directive({
    selector: '[appIconTemplate]'
})
export class IconTemplateDirective implements OnInit, OnDestroy {

    @Input('appIconTemplate') name: string;

    constructor(private iconService: IconService,
                private template: TemplateRef<any>) {
    }

    ngOnInit(): void {
        this.iconService.templateMap[this.name] = this.template;
    }

    ngOnDestroy() {
        delete this.iconService.templateMap[this.name];
    }
}
