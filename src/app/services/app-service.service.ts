import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(
    private http: HttpClient
  ) { }

  public fetchData(): Observable<any> {
    return this.http.get('assets/mockdata/mock.json').pipe(
      map((res: any) => {
        const [ boy, girl ]: any = [Math.random(), Math.random()]
        return boy - girl > 0
      }),
      catchError((err) => throwError(err)),
    );
  }
}
