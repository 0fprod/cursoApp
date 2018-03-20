import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FireservService {
                        //hasta aqui es la url de la BD || coleccion/tabla.json
  private db_url = 'https://cursoapp-ed595.firebaseio.com/alumnos.json';

  private db_baseurl = 'https://cursoapp-ed595.firebaseio.com/alumnos';

  constructor(private http:HttpClient) { }

  postAlumno(alumno): Observable<any>{
    //Convert alumno to string
    const alstr = JSON.stringify(alumno);
    const headers = new HttpHeaders({
      'ContentType' : 'application/json'
    });

    return this.http.post(this.db_url, alstr, {headers});
  }

  getAlumno(): Observable<any>{
    return this.http.get(this.db_url);
  }

  updateAlumno(al:any,name:string): Observable<any>{
    const headers = new HttpHeaders({
      'ContentType' : 'application/json'
    });
    return this.http.put(`${this.db_baseurl}/${name}.json`, al, {headers});
  } 

  deleteAlumno(name:string): Observable<any>{
    const headers = new HttpHeaders({
      'ContentType' : 'application/json'
    });
    return this.http.delete(`${this.db_baseurl}/${name}.json`, {headers});
  }

}
