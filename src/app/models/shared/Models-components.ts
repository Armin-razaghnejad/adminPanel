

export interface UserRol{
    name:string;
    status:string;
}

export class Users implements UserRol{

   constructor( name,status){
       this.name=name;
       this.status=status;
   }
   
    name: string;
    status:string = 'فعال' || 'غیر فعال' || 'نامحسوس';
    
    
    

}
