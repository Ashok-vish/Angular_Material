import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-servic',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent implements OnInit {

  constructor( private ServiceService: ServiceService) { }

detail:any
  ngOnInit(): void {
    this.detail=this.ServiceService.getfunction
  }

}
