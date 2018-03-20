import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../../../shared/models/alumno';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driventemplate',
  templateUrl: './driventemplate.component.html',
  styleUrls: ['./driventemplate.component.scss']
})
export class DriventemplateComponent implements OnInit {

  @ViewChild('form') form:NgForm;

  private alumno:Alumno;

  private option:string;
  private select:string[] = ['opt1','opt2'];

  constructor() { }

  ngOnInit() {
  }

  private onSave(){
    this.alumno = new Alumno(this.form.value.id, this.form.value.name, this.form.value.city);
    this.option = this.form.value.opt;
    this.form.reset();
  }

}
