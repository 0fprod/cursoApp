import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from '../../../shared/models/alumno';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  private options:any[] = ['op1', 'op2'];

  private alumnoForm:FormGroup;
  private alumno: Alumno;
  private selectedOp: any;

  constructor(private fb:FormBuilder) { 
  }

  ngOnInit() {
    this.alumnoForm = this.fb.group({
      id : [0, Validators.required],
      name: ['', [Validators.required, Validators.pattern(/A\d{6}/g)] ],
      email: ['', [Validators.required, Validators.email]],
      opt: ''
    });
    this.onChanges();
  }


  onChanges(): void{
    this.alumnoForm.valueChanges.subscribe(val => {
      console.log(val);
      //val es el contenido del alumnoForm en cada momento que cambie alguno de sus campos
      //para acceder desde el html es poner en un input [(ngModel)]="alumnoForm.value.campoquequieras"
    });
  }

  onSubmit(){
    this.alumno = new Alumno(
      this.alumnoForm.get('id').value,
      this.alumnoForm.get('name').value,
      this.alumnoForm.get('email').value,
    );
  }

}
