import { Component,  OnInit } from '@angular/core';
import { ServicesService } from '../models/shared/services.service';

@Component({
  selector: 'app-log-user',
  templateUrl: './log-user.component.html',
  styleUrls: ['./log-user.component.css']
})
export class LogUserComponent implements OnInit {
item;



  constructor(private Users:ServicesService) { 
    this.item=Users.items

  }
  Changw(x,y){
    this.Users.Changed(x,y)
  }

  ngOnInit(): void {
  }

}
