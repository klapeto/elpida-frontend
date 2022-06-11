import {AfterViewInit, Component, ContentChildren, Input, OnDestroy, OnInit, QueryList, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {

    @ContentChildren('panel') public panels: QueryList<TemplateRef<any>>;

    public currentPanel: TemplateRef<any>;
    public index: number = 0;

    private intervalId: number;

    public constructor() {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        this.currentPanel = this.panels[0];
        setInterval(() => {
            if (++this.index >= this.panels.length) {
                this.index = 0;
            }
            this.currentPanel = this.panels[this.index];
        }, 1000);
    }

    public ngOnDestroy(): void {
    }

}
