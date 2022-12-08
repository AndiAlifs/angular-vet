import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl + 'rekening')
                    .pipe(retry(1), catchError(this.errorHandling));
    
  }

  deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>(this.baseUrl + 'rekening/' + id)
                    .pipe(retry(1), catchError(this.errorHandling));
  }

  updateAccount(id: number, name: string, balance: number, norek: string): Observable<Account> {
    return this.http.put<Account>(this.baseUrl + 'rekening/' + id, { nama: name, saldo: balance, norek: norek}, this.httpOptions)
                    .pipe(retry(1), catchError(this.errorHandling));
  }

  errorHandling(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = error.error.message;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
