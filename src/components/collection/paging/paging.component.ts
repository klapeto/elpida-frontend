import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from '../../../services/modal.service';
import {JumpToPageComponent} from './jump-to-page/jump-to-page.component';

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

    @Input()
    public readonly maxPagerButtons: number = 5;

    @Output()
    public readonly pageChanged: EventEmitter<number> = new EventEmitter<number>();

    @ViewChild('jumpToPageTemplate')
    public jumpToPageTemplate: TemplateRef<number>;

    public pages: number[];

    private _pagesCount: number;

    private _currentPage: number;

    public constructor(private readonly modalService: ModalService) {

    }

    public get pagesCount(): number {
        return this._pagesCount;
    }

    @Input()
    public set pagesCount(value: number) {
        this._pagesCount = value;
        this.changePageImpl();
    }

    public get currentPage(): number {
        return this._currentPage;
    }

    @Input()
    public set currentPage(value: number) {
        this._currentPage = value;
        this.changePageImpl();
    }

    public changePage(page: number): void {
        this.pageChanged.emit(page);
    }

    public getNextPage(): void {
        if (this._currentPage + 1 < this._pagesCount) {
            this.changePage(this._currentPage + 1);
        } else {
            return;
        }
    }

    public jumpToPage(): void {
        this.modalService.show('Jump to page', JumpToPageComponent, component => {
            component.currentPage = this._currentPage;
            component.pagesCount = this._pagesCount;
            const subscription = component.currentPageChanged.subscribe(p => {
                subscription.unsubscribe();
                this.modalService.hide();
                this.changePage(p);
            });
        });
    }

    public getPreviousPage(): void {
        if (this._currentPage > 0) {
            this.changePage(this._currentPage - 1);
        } else {
            return;
        }
    }

    public ngOnInit(): void {
        this.changePage(this._currentPage);
    }

    private changePageImpl(): void {
        const thisMaxButtons = Math.min(this.maxPagerButtons, this._pagesCount);
        const half = Math.floor(thisMaxButtons / 2);

        // Calculate half points
        // eg: cur page = 5 -> [2 4 5 6 7] --> a = 2, b = 7
        let a = Math.max(0, this._currentPage - half);
        let b = Math.min(this._currentPage + half, this._pagesCount);

        let diff = b - a; // distance of points (how many buttons this will show)

        // distance from max buttons we want to show (how many buttons we miss to hit the 'thisMaxButtons' target)
        let diffFromMaxButtons = thisMaxButtons - diff;

        // Extend the B by the distance we need (up to the limit)
        b = Math.min(b + diffFromMaxButtons, this._pagesCount);

        diff = b - a; // recalculate distances
        diffFromMaxButtons = thisMaxButtons - diff;

        // Extend the A by the rest of distance we need (up to the limit)
        a = Math.max(0, a - diffFromMaxButtons);

        // Recalculate distance (this should equal to 'thisMaxButtons')
        diff = b - a;

        this.pages = [];
        for (let i = 0; i < diff; i++) {
            this.pages.push(a++);
        }
    }

}
