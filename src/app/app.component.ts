import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from './data-storage-service';
import { GetTnuotAggregate } from './get-tnuot-aggregate';
import { LakoachTnuaa } from './lakoach-tnuaa';
import { LakoachService } from './lakoach.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  result : GetTnuotAggregate;
  
    constructor(private lakoachService: LakoachService, private dataStore: DataStorageService,private router: Router) {
      
      
             console.log("finish update");
      

       this.lakoachService.getTnuotAggregateQueryWithFlag().subscribe(data => {
       
        this.result = data;
        // this.tnuot = data.lakoachTnuaaList;
        // for (let i = 0; i < data.lakoachTnuaaList.length; i++){
        //   this.tnuot[i].id=data.lakoachTnuaaList[i][3];
        //   this.tnuot[i].name=data.lakoachTnuaaList[i][4];
        //   this.tnuot[i].money=data.lakoachTnuaaList[i][0];
        //   this.tnuot[i].esek=data.lakoachTnuaaList[i][1];
        //   this.tnuot[i].ccno=data.lakoachTnuaaList[i][2];

        // }
        console.log("finish update");
   });
  }

  ngOnInit() {
    this.lakoachService.getTnuotAggregateQueryWithFlag().subscribe(data => {
      console.log("data coming:", data);
      //this.tnuot.push(data.shift());
      this.result = data;
      console.log("finish update");
    })
  }

   key: string = 'id';
   reverse: boolean = false;

     serachById(key) {
      this.lakoachService.getTnuotAggregateQueryWithId(key).subscribe(data => {
        console.log("data coming:", data);
        //this.tnuot.push(data.shift());
        this.result = data;
        console.log("finish update");
      })
      //this.router.navigate(["/AppComponent"]);

       
     }
  // sort(key) {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }
}
