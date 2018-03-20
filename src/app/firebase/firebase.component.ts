import { Component, OnInit } from '@angular/core';
import { FireservService } from './services/fireserv.service';
import { Alumno } from '../shared/models/alumno';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  private al:Alumno = new Alumno(1,'TheName','TheCity');
  private response: any;
  constructor(private fs:FireservService) { }

  ngOnInit() {
  }

  private async doPost(){
    try{
      const response = this.fs.postAlumno(this.al).toPromise();
      this.response = response;
    } catch (err){
      console.log('PostErr', err)
    }
  }

  private async doGet(){
    try{
      const response = this.fs.getAlumno().toPromise()
      this.response = response;
    } catch (err){
      console.log('GetErr', err)
    }
  }

  private async doUpdate(){
    try{
      this.al = new Alumno(1,'ModName','ModCity')
      const response = this.fs.updateAlumno(this.al,'-L82wtzFdmh6UHnaXZ2z').toPromise()
      this.response = response;
    } catch (err){
      console.log('UpdErr', err)
    }
  }

  private async doDelete(){
    try{
      const response = this.fs.deleteAlumno('-L82wtzFdmh6UHnaXZ2z').toPromise()
      this.response = response;
    } catch (err){
      console.log('DeletErr', err)
    }
  }

}
