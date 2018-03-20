import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  private menuLinks: any[] = [];

  private now:object = new Date();

  private texto:string = 'sAmPLe tExT';

  private num:number = 19.3231;

  private moneda:number = 10.42;

  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};

  private onChange(value){
    this.gender = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
