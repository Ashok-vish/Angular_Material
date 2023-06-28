import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, filter, from, interval, map, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-filter-rxjs',
  templateUrl: './filter-rxjs.component.html',
  styleUrls: ['./filter-rxjs.component.css']
})
export class FilterRXJSComponent implements OnInit {


  memberdata = [{
    id: 1,
    name: 'nosjdf',
    age: 23,
  },

  {
    id: 2,
    name: 'mosh',
    age: 23,
  },
  {
    id: 3,
    name: 'ommi',
    age: 25,
  },
  {
    id: 1,
    name: 'nosjdf',
    age: 34,
  }
  ]
  data: any

  // ex-02 TAP function 



  
  
  // unsubs!:Subscription;
  // username = ['ashok', 'mosh', 'harry', 'tom', 'lily', 'adam', 'smith']
  

  ngOnInit(): void {

    const membername = from(this.memberdata)
    membername.pipe(
      filter(data => data.name.length > 4),
      toArray()
    ).
      subscribe(res => {
        console.log(res);
        this.data = res
      })
 


  //  ex-02
    
  
  const username = ['ashok', 'mosh', 'harry', 'tom', 'lily', 'adam', 'smith']
  let unsubs!:Subscription;

    const Arr=interval(2000);
    unsubs=Arr.pipe(
      // tap(fun=>'iaiam'+fun)
      // map(fun=>username[fun])
          

      map(fun=>{
        
      })
    ) 
    .subscribe((res: any)=>{console.log(res)})
    
  
    




  }

}
