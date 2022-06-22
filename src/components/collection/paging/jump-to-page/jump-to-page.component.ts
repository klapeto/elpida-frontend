import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from '../../../../services/modal.service';

@Component({
    selector: 'app-jump-to-page',
    templateUrl: './jump-to-page.component.html',
    styleUrls: ['./jump-to-page.component.css']
})
export class JumpToPageComponent implements OnInit {

    @Input()
    public pagesCount: number;

    @Input()
    public currentPage: number;

    @Output()
    public currentPageChanged: EventEmitter<number> = new EventEmitter<number>();

    public pageToJump: number;

    public constructor(private modalService: ModalService) {
    }

    public ngOnInit(): void {
        this.pageToJump = this.currentPage + 1;
    }

    public onJumpToPageSubmitted(): void {
        if (this.pageToJump < 1 || this.pageToJump > this.pagesCount) {
            this.modalService.showMessage('Invalid page', `Page must be between 1 and ${this.pagesCount}.`);
            return;
        }
        this.currentPageChanged.emit(this.pageToJump - 1);
    }

}
