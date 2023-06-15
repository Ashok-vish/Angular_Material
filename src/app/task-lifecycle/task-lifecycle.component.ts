import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-lifecycle',
  templateUrl: './task-lifecycle.component.html',
  styleUrls: ['./task-lifecycle.component.css']
})
export class TaskLifecycleComponent implements OnInit {



  

  rettext:any
  callevent(child:any) {
    this.rettext=child.value
    
  }

  itime:any
  itimer(){
    this.itime = setInterval(() => {this.rettext;},5000)
    console.log(this.itime)
  }

  
  ngOnInit() {

    // this.itime();
    this.itime;
    this.itimer();{
      this.itime = setInterval(() => {this.rettext;},5000)
      console.log(this.itime)
    }
  }
   

  ngOnDestroy() {
    clearInterval(this.itime);
  }



}
