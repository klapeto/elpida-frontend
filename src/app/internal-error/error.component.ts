import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorHandlerService} from '../../services/error-handler.service';
import {LinksService} from '../../services/links.service';

@Component({
    selector: 'app-internal-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

    public status: number;
    public statusText: string;
    public message: string;
    public reportUrl: string;
    public responseData: string;
    public stackTrace: string;

    public constructor(private readonly errorHandler: ErrorHandlerService,
                       private readonly linksService: LinksService) {
    }

    public ngOnInit(): void {
        if (this.errorHandler.lastError) {
            console.error(this.errorHandler.lastError);
            if (this.errorHandler.lastError instanceof HttpErrorResponse) {
                this.showHttpError(this.errorHandler.lastError);
            } else {
                this.showClientError(this.errorHandler.lastError);
            }
        } else {
            this.resetError();
        }
    }

    private static sanitizeInternalError(str: string): string {
        return str.replace(new RegExp('\n', 'g'), '<br/>');
    }

    private resetError(): void {
        this.status = null;
        this.statusText = null;
        this.responseData = null;
        this.message = 'Unknown error';
        this.reportUrl = this.linksService.frontendRepoLink;
    }

    private showClientError(error: Error): void {
        this.status = null;
        this.statusText = null;
        this.message = error.message;
        if (error.stack) {
            this.stackTrace = ErrorComponent.sanitizeInternalError(error.stack);
        }
        this.reportUrl = this.linksService.frontendRepoLink;
    }

    private showHttpError(error: HttpErrorResponse): void {
        this.status = error.status;
        this.statusText = error.statusText;
        this.message = error.message;
        if (error.error) {
            this.responseData = ErrorComponent.sanitizeInternalError(JSON.stringify(error.error));
        }
        this.reportUrl = this.linksService.backendRepoLink;
    }
}
