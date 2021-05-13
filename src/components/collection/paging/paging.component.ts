import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

    @Input() public readonly maxPagerButtons = 5;
    @Input() public readonly pagesCount: number;
    @Output() public readonly pageChanged = new EventEmitter<number>();

    public pages: number[];
    public currentPage: number;

    public inputPage: number;

    public changePage(page: number): void {
        this.currentPage = page;

        const thisMaxButtons = Math.min(this.maxPagerButtons, this.pagesCount);
        const half = Math.floor(thisMaxButtons / 2);

        // Calculate half points
        // eg: cur page = 5 -> [2 4 5 6 7] --> a = 2, b = 7
        let a = Math.max(0, this.currentPage - half);
        let b = Math.min(this.currentPage + half, this.pagesCount);

        let diff = b - a; // distance of points (how many buttons this will show)

        // distance from max buttons we want to show (how many buttons we miss to hit the 'thisMaxButtons' target)
        let diffFromMaxButtons = thisMaxButtons - diff;

        // Extend the B by the distance we need (up to the limit)
        b = Math.min(b + diffFromMaxButtons, this.pagesCount);

        diff = b - a; // recalculate distances
        diffFromMaxButtons = thisMaxButtons - diff;

        // Extend the A by the rest of distance we need (up to the limit)
        a = Math.max(0, a - diffFromMaxButtons);

        // Recalculate distance (this should equal to 'thisMaxButtons')
        diff = b - a;

        this.pages = new Array<number>();
        for (let i = 0; i < diff; i++) {
            this.pages.push(a++);
        }
        this.pageChanged.emit(this.currentPage);
    }

    public getNextPage(): void {
        if (this.currentPage + 1 < this.pagesCount) {
            this.changePage(this.currentPage + 1);
        } else {
            return;
        }
    }

    public jumpToPage(): void {
        if (this.inputPage <= 0) {
            this.inputPage = undefined;
            alert('The page number can only be a positive number starting from 1');
            return;
        }
        if (this.inputPage - 1 <= this.pagesCount) {
            this.changePage(this.inputPage - 1);
        } else {
            this.inputPage = undefined;
            alert('The max page number is ' + this.pagesCount);
        }
    }

    public getPreviousPage(): void {
        if (this.currentPage > 0) {
            this.changePage(this.currentPage - 1);
        } else {
            return;
        }
    }

    ngOnInit() {
        this.changePage(0);
    }

}
