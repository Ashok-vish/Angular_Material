import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  _url:string= "http://localhost:3000/posts"

  // _url:string= "C:\Users\Dell\Desktop\angular task file\angular_material\db.json"
  constructor(private http: HttpClient) { }

  client(){
    return this.http.get(this._url) 
    //above line will return you observable 
  }


  // getfunction(clientdetail: string){
  //   return this.http.post(this._url,clientdetail)
  // }



  // this method is part of post method and this was implemented in posthttpform component 
  postfunction(useradd:any){
    return this.http.post(this._url, useradd)
  }
  
  

  // this is the delete method of http part which was implement in posthttpcomponent
  
  deletemethod(id:any)
  {
    this.http.delete(this._url,id)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  // without using json,http, observable displaying data at UI  
  // getfunction = [
  //   {
  //     id: 1,
  //     email: "json-server",
  //     passward: 123456
  //   },

  //   {
  //     id: 2,
  //     email: "ashok@gmail.com",
  //     passward: 8164098094
  //   },

  //   {
  //     id: 3,
  //     email: "abc@gmail.com",
  //     passward: 86783490
  //   },

  //   // { "id": 1, "title": "lowdb is awesome" }

  // ]
  
  

}
