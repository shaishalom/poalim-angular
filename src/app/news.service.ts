import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import {News} from './News';
import { GetTnuotAggregate } from './get-tnuot-aggregate';
import { LakoachTnuaa } from './lakoach-tnuaa';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  protected httpHeaders: HttpHeaders;

  url1: string = environment.url + '/lakoach/getTnuotAggregateQuery';
  url2: string = environment.url + '/lakoach/getTnuotAggregateQueryWithFlag';


  constructor(protected http: HttpClient) {
      this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // .set('x-codegagan', 'gagan');
  }

  getTnuotAggregateQuery(): Observable<LakoachTnuaa[]> {
    return this.http.get<LakoachTnuaa[]>(this.url1, {headers: this.httpHeaders});
  }

  getTnuotAggregateQueryWithFlag(): Observable<GetTnuotAggregate> {
    return this.http.get<GetTnuotAggregate>(this.url2, {headers: this.httpHeaders});
  }


}
