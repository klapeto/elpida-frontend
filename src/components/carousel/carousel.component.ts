import {AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit, OnDestroy {

    @ContentChildren('panel') public set panels(pnls: QueryList<TemplateRef<any>>) {
        this.panelData = pnls.map(p => new Panel(p, false, ''));
    }

    public get currentPanel(): Panel {
        return this.panelData[this.index];
    }
    public index: number = 0;

    private intervalId: number;
    public panelData: Panel[];

    public constructor() {
    }

    public ngOnInit(): void {
    }

    public ngAfterContentInit(): void {
        this.currentPanel.visible = true;
        this.currentPanel.classes = 'current';

        setInterval(() => {
            const previousPanel = this.currentPanel;
            this.increaseIndex();
            this.currentPanel.visible = true;
            this.currentPanel.classes = 'next';

            setTimeout(() => {
                this.currentPanel.classes = 'current';
                previousPanel.classes = 'previous';
                setTimeout(() => {
                    previousPanel.visible = false;
                }, 1000);
            });

        }, 2000);
    }

    public increaseIndex(): void {
        if (++this.index >= this.panelData.length) {
            this.index = 0;
        }
    }

    public ngOnDestroy(): void {
    }

}

class Panel {
    public constructor(public readonly template: TemplateRef<any>, public visible: boolean, public classes: string) {
    }
}
