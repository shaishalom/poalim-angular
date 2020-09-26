import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { GetTnuotAggregate } from './get-tnuot-aggregate';

@Injectable({
    providedIn: 'root'
  })
export class DataStorageService {
    private tnuotAggregateData: BehaviorSubject<GetTnuotAggregate> = new BehaviorSubject<GetTnuotAggregate>(new GetTnuotAggregate());

    public setTnuotAggregate(tnuotAggregateData: GetTnuotAggregate) {
        this.tnuotAggregateData.next(tnuotAggregateData);
      }
      public getTnuotAggregate(): BehaviorSubject<GetTnuotAggregate> {
        return this.tnuotAggregateData;
      }
    
    

}
