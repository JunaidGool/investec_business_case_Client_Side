import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RelationshipsService {

  constructor(public http:Http) { 
    console.log('====>relationships service connected<====')
  }

  getRelationships(){
    return this.http.get("http://localhost:3000/api/getAllRelationships")
      .map(res => res.json());
  }

}
