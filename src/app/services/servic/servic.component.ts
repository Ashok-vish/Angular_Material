import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-servic',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent implements OnInit {


  constructor( private ServiceService: ServiceService) { }
  

//  user=this.ServiceService.getfunction


data:any
  ngOnInit(): void {
    console.log(this.ServiceService.getfunction)
   this.data=this.ServiceService.getfunction                     
  }

}
