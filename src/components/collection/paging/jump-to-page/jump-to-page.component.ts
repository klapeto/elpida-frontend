import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalService} from '../../../../services/modal.service';

@Component({
    selector: 'app-jump-to-page',
    templateUrl: './jump-to-page.component.html',
    styleUrls: ['./jump-to-page.component.css']
})
export class JumpToPageComponent implements OnInit {

    @Input() pagesCount: number;
    @Input() currentPage: number;
    @Output() currentPageChanged: EventEmitter<number> = new EventEmitter<number>();

    pageToJump: number;

    constructor(private modalService: ModalService) {
    }

    ngOnInit(): void {
        this.pageToJump = this.currentPage + 1;
    }

    onJumpToPageSubmitted(): void {
        if (this.pageToJump < 1 || this.pageToJump > this.pagesCount) {
            this.modalService.showMessage('Invalid page', 'Page must be between 1 and ' + this.pagesCount + '.');
            return;
        }
        this.currentPageChanged.emit(this.pageToJump - 1);
    }

}
