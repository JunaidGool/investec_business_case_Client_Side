import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LimitsService {

  constructor(public http: Http) { 
    console.log("=========> Limits Service Connected <========")
  }

  getLimits(){
    return this.http.get("http://localhost:3000/api/getAll_limits")
      .map(res => res.json());
  }

}
