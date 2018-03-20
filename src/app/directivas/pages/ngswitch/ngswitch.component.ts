import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  private jugadores: any[];

  constructor() { }

  ngOnInit() {
    this.jugadores = [
      { name: 'Jordan', team: 'Chicago Bulls' },
      { name: 'Byrant', team: 'LA Lakers' },
      { name: 'James', team: 'Miami Heat' }
    ];
  }

}
