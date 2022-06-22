import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {

    public lastError: Error;

    public constructor(private router: Router) {
    }

    public async handle(error: Error): Promise<void> {
        this.lastError = error;
        await this.router.navigate(['/Internal-Error']);
    }
}
