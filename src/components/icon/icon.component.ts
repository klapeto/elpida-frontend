import {Component, Input, ViewContainerRef} from '@angular/core';
import {IconService} from '../../services/icon.service';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css']
})
export class IconComponent {

    public constructor(private iconService: IconService,
                private container: ViewContainerRef) {

    }

    @Input() public set iconName(s: string) {
        const template = this.iconService.templateMap[s];
        if (template !== undefined) {
            this.container.clear();
            this.container.createEmbeddedView(template);
        }
    }

}
