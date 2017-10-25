import { Component, OnInit } from '@angular/core';
import { IRelationship } from '../../models/interface.relationship';
import { RelationshipsService } from '../../services/relationships.service';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {

  relationships: IRelationship[];

  constructor(private relationshipsService: RelationshipsService) {

   }

  ngOnInit() {

    this.relationshipsService.getRelationships().subscribe((relationships) => {

      this.relationships = relationships

      

      for (let item of relationships){

        if (item.Entity_Id == item.Entity_Id){

          console.log(item.Entity_Name)
    
        }

      }

    });

  }

}
