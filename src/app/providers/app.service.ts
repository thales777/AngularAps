import { Endereco } from './../models/endereco.models';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  headers: Headers = new Headers({ 'Content-type': 'Application/json' })

  constructor(public http: Http) { }

  get() {
    return this.mapped(this.http.get('http://localhost:8080/endereco', {headers: this.headers}))
  }

  post(endereco: Endereco){
    this.http.post('http://localhost:8080/endereco',endereco,{headers:this.headers}).subscribe(res=>{
      console.log(res);
    });
  }

  private mapped(obs: Observable<any>): Observable<any> {
    return obs.pipe(map(res => {
      if (res._body) {
        return res.json();
      }
      return true;
    }));
  }

}
