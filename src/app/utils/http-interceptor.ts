import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'An unknown error occurred!';
            if (error.error instanceof ErrorEvent) {
                errorMessage = `Error: ${error.error.message}`;
            } else {
                errorMessage = `Server Error: ${error.status}`;
            }
            alert(errorMessage);
            return throwError(() => new Error(errorMessage));
        }));
};