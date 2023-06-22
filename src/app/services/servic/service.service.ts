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
    // return this.http.get("http://localhost:3000/posts")
    // return this.http.get(this._url)
    return this.http.get(this._url)
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
