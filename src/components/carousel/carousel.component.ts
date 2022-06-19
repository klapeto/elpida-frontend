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
    private currentPanel: Panel = null;
    private previousPanel: Panel = null;
    private canChange: boolean = true;

    @ContentChildren('panel')
    public set panels(templates: QueryList<TemplateRef<any>>) {
        this.panelData = templates.map(p => new Panel(p, ''));
    }

    public animationEnd(): void {
        if (this.previousPanel.classes !== null) {
            this.previousPanel.classes = null;
            this.canChange = true;
        }
    }

    public pause(): void {
        clearInterval(this.intervalHandle);
    }

    public resume(): void {
        this.intervalHandle = setInterval(() => {
            this.onNextClicked();
        }, this.interval);
    }

    public ngAfterContentInit(): void {
        this.changePanel(() => this.panelData[0]);

        this.resume();
    }

    public onNextClicked(): void {
        this.pause();
        this.changePanel(() => this.panelData[this.increaseIndex()]);
        this.resume();
    }

    public onPreviousClicked(): void {
        this.pause();
        this.changePanel(() => this.panelData[this.decreaseIndex()], false);
        this.resume();
    }

    public onPanelButtonClicked(panel: Panel): void {
        this.pause();
        this.changePanel(() => panel);
        this.resume();
    }

    public ngOnDestroy(): void {
        clearInterval(this.intervalHandle);
    }

    public isThePanelCurrent(panel: Panel): boolean {
        return this.currentPanel === panel;
    }

    private changePanel(panelGenerator: () => Panel, fromLeftToRight: boolean = true): void {

        if (!this.canChange) {
            return;
        }

        const targetPanel = panelGenerator();
        if (this.currentPanel === null) {
            this.currentPanel = targetPanel;
            this.currentPanel.classes = 'initial';
            return;
        }

        if (this.currentPanel === targetPanel) {
            return;
        }

        this.canChange = false;

        this.previousPanel = this.currentPanel;
        this.currentPanel = targetPanel;
        this.currentPanel.classes = fromLeftToRight ? 'next-new' : 'previous-new';
        this.previousPanel.classes = fromLeftToRight ? 'next-old' : 'previous-old';
    }

    private increaseIndex(): number {
        if (++this.index >= this.panelData.length) {
            this.index = 0;
        }

        return this.index;
    }


    private decreaseIndex(): number {
        if (--this.index < 0) {
            this.index = this.panelData.length - 1;
        }

        return this.index;
    }

}

class Panel {
    public constructor(public readonly template: TemplateRef<any>,
                       public classes: string) {
    }
}
