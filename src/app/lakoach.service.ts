import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { GetTnuotAggregate } from './get-tnuot-aggregate';
import { LakoachTnuaa } from './lakoach-tnuaa';

@Injectable({
  providedIn: 'root'
})
export class LakoachService {
  protected httpHeaders: HttpHeaders;

  url1: string = environment.url + '/lakoach/getTnuotAggregateQuery';
  url2: string = environment.url + '/lakoach/getTnuotAggregateQueryWithFlag';
 

  constructor(protected http: HttpClient,private router: Router) {
      this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // .set('x-codegagan', 'gagan');
  }

  getTnuotAggregateQuery(): Observable<LakoachTnuaa[]> {
    return this.http.get<LakoachTnuaa[]>(this.url1, {headers: this.httpHeaders});
  }

  getTnuotAggregateQueryWithFlag(): Observable<GetTnuotAggregate> {
    return this.http.get<GetTnuotAggregate>(this.url2, {headers: this.httpHeaders});
  }

  getTnuotAggregateQueryWithId(id: string): Observable<GetTnuotAggregate> {
    let url3 = this.url2 + "/" + id;
    let result : Observable<GetTnuotAggregate> = this.http.get<GetTnuotAggregate>(url3, {headers: this.httpHeaders});
    return result;
    //this.dataStorage.setUserLoginData(data.userData);

  }



}
