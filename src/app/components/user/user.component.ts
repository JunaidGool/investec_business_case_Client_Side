import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/interfaces';
import { LimitsService } from '../../services/limits.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private limitsService: LimitsService) { 

  }

  ngOnInit() {

    this.name = 'Junaid Gool';
    this.age = 38;
    this.email = "my.email.com";
    this.address = {
      street: "18 Doige Road",
      city: "Cape-Town",
      province: "Western Cape"
    };

    this.hobbies = ["write code", "play tennis", "swing in trees"];
    this.limitsService.getLimits().subscribe((posts) => {
      // console.log(posts)
      this.posts = posts
    });
  }

  onClick(){
    this.name = "SUPERMAN";
  }

  addHobby(hobby){
    console.log(hobby)
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){

    for(let i=0;  i<this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){

    this.isEdit = !this.isEdit;

  }

}

interface Post{
  entityId: number,
  riskTaker: string,
  product: string,
  limitType: string,
  riskType: string,
  currency: string,
  exposure: number,
  currentLimit: number,
  approvedLimit: number
}


