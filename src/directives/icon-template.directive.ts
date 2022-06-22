import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {IconService} from '../services/icon.service';

@Directive({
    selector: '[appIconTemplate]'
})
export class IconTemplateDirective implements OnInit, OnDestroy {

    @Input('appIconTemplate')
    public name: string;

    public constructor(private iconService: IconService,
                private template: TemplateRef<any>) {
    }

    public ngOnInit(): void {
        this.iconService.templateMap[this.name] = this.template;
    }

    public ngOnDestroy(): void {
        delete this.iconService.templateMap[this.name];
    }
}
