import { Component } from '@angular/core';
import { GetTnuotAggregate } from './get-tnuot-aggregate';
import { LakoachTnuaa } from './MODEL/lakoach-tnuaa';
import {News} from './News';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  tnuot: LakoachTnuaa[];
  result : GetTnuotAggregate;
  
    constructor(private newsService: NewsService) {
      //  this.newsService.getTnuotAggregateQuery().subscribe(data => {
      //       console.log("data coming:", data);
      //       //this.tnuot.push(data.shift());
      //       this.tnuot = data;
      //       for (let i = 0; i < data.length; i++){
      //         this.tnuot[i].id=data[i][3];
      //         this.tnuot[i].name=data[i][4];
      //         this.tnuot[i].money=data[i][0];
      //         this.tnuot[i].esek=data[i][1];
      //         this.tnuot[i].ccno=data[i][2];

      //       }
      //       console.log("finish update");
      //  });

       this.newsService.getTnuotAggregateQueryWithFlag().subscribe(data => {
        console.log("data coming:", data);
        //this.tnuot.push(data.shift());
        this.result = data;
        this.tnuot = data.lakoachTnuaaList;
        for (let i = 0; i < data.lakoachTnuaaList.length; i++){
          this.tnuot[i].id=data.lakoachTnuaaList[i][3];
          this.tnuot[i].name=data.lakoachTnuaaList[i][4];
          this.tnuot[i].money=data.lakoachTnuaaList[i][0];
          this.tnuot[i].esek=data.lakoachTnuaaList[i][1];
          this.tnuot[i].ccno=data.lakoachTnuaaList[i][2];

        }
        console.log("finish update");
   });

    }

  key: string = 'headline';
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
