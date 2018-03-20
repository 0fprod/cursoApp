import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {

  private puntuacion: number;

  constructor() { }

  ngOnInit() {
  }

  private setColor(): string{
    return (this.puntuacion > 10) ? 'green' : 'red';
  }

}
