
import { Injectable, Input } from '@angular/core';
import { Users } from './Models-components';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
@Input()users:Users;
  items:Users[]=[
    {name:"name",status:"فعال"},
    {name:"name",status:"غیر فعال"}
]

  

  register({name,status}) {
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].name!==name ){
        this.items.push({name,status})
        break
      }else {
          alert('وجود دارد');
          break
      }
    }
  }

  constructor() { }
  PushAccunt(name:string ,status:string){
    this.register({name,status})
  }
  Changed(x,y){
    switch(x){
      case 0:{
          this.items.splice(y,1);
          break
      }
      case 1:{
        this.items[y].status="فعال";
        console.log("فعال شد");
        break
      }
      case 2:{
        this.items[y].status="غیر فعال";
        console.log("غیر فعال شد");
        break
      }
      case 3:{
        this.items[y].status="نا محسوس";
        console.log("نا محسوس شد");
        break
      }
    }
  }
}
