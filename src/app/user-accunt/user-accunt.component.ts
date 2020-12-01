import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../models/shared/services.service';

@Component({
  selector: 'app-user-accunt',
  templateUrl: './user-accunt.component.html',
  styleUrls: ['./user-accunt.component.css']
})
export class UserAccuntComponent implements OnInit {
test='';
Set=''

  constructor(private Send:ServicesService) { }

  setData(i,l){
    if(i != "" && l != ""){
      this.Send.PushAccunt(i,l)
    }else{
      alert("مقادیر را کامل کنید")
    }
  }
  ngOnInit(): void {
  }

}
