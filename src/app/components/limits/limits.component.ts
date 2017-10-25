import { Component, OnInit } from '@angular/core';
import { Ilimit } from '../../models/interface.limit'
import { LimitsService } from '../../services/limits.service';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.css']
})
export class LimitsComponent implements OnInit {

  limits: Ilimit[];

  constructor(private limitsService: LimitsService) { 

  }

  ngOnInit() {

    this.limitsService.getLimits().subscribe((limits) => {
      // console.log(posts)
      this.limits = limits
    });

    
    

  }

}
