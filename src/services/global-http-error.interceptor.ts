import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErrorHandlerService} from './error-handler.service';

@Injectable()
export class GlobalHttpErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router, private errorHandlerService: ErrorHandlerService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                catchError((error) => {
                    let handled = false;
                    if (error instanceof HttpErrorResponse) {
                        switch (error.status) {
                            case 404:
                                this.router.navigate(['not-found']);
                                handled = true;
                                break;
                            default:
                                this.errorHandlerService.handle(error);
                                handled = true;
                                break;
                        }
                    }
                    return handled ? of(error) : throwError(error.message);
                })
            );
    }
}
