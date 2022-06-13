import {AfterContentInit, Component, ContentChildren, Input, OnDestroy, QueryList, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit, OnDestroy {
    public panelData: Panel[];

    @Input()
    public interval: number = 3000;

    private index: number = 0;
    private intervalHandle: number;
    private previousPanel: Panel;

    @ContentChildren('panel')
    public set panels(templates: QueryList<TemplateRef<any>>) {
        this.panelData = templates.map(p => new Panel(p, false, ''));
    }

    public get currentPanel(): Panel {
        return this.panelData[this.index];
    }

    public ngAfterContentInit(): void {
        this.currentPanel.visible = true;
        this.currentPanel.classes = 'current';

        this.intervalHandle = setInterval(() => {
            if (this.previousPanel !== undefined) {
                this.previousPanel.visible = false;
            }

            this.previousPanel = this.currentPanel;
            this.increaseIndex();
            this.currentPanel.visible = true;
            this.currentPanel.classes = 'next';

            setTimeout(() => {
                this.currentPanel.classes = 'current';
                this.previousPanel.classes = 'previous';
            });

        }, this.interval);
    }

    public increaseIndex(): void {
        if (++this.index >= this.panelData.length) {
            this.index = 0;
        }
    }

    public ngOnDestroy(): void {
        clearInterval(this.intervalHandle);
    }

}

class Panel {
    public constructor(public readonly template: TemplateRef<any>, public visible: boolean, public classes: string) {
    }
}
