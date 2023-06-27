import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {


  searchingform = new FormGroup({
    text: new FormControl()
  })







  // using viewchild for implementing fromevent part of rjx . in this we created on button and aply on it
  // we can use this decorator multiple time
  @ViewChild('validate')
  validate!: ElementRef;




  // of using string
  studentname: Observable<string> = of('ram');

  //  of using for object

  sobject = {
    name: 'ashok',
    agr: 24,

  }

  sobsobject: Observable<any> = of(this.sobject)




  // using rxjs operator (of opreator) and in  which how we can use of at the place of observable method
  // just like obseravle can be any type like string,arra,object same thing we can aplly using of method

  student$: Observable<string[]> = of(['mosh', 'ashok', 'ajfnf'])
  takemethod: any;
  // you can also store value of array in 1 variale(student)=[] n then  mention the variable name inside of (this.student)  

  ngOnInit(): void {
    this.student$.subscribe(data => { console.log(data) })
    // oservable should alwas hav dollor sign 
    this.studentname.subscribe(sname => { console.log(sname) })
    this.sobsobject.subscribe(ssoject => { console.log(ssoject) })

    // using 


  }

  // define method of event using fromevent

  rxjsoperator() {
    const buttonevent$ = fromEvent(this.validate?.nativeElement, 'click')
    // created variable fromevent and it is connect to (this.validate)and (nativeElement) is the element which we will click
    // and mention event name i.e (click)
    buttonevent$.subscribe(event => { console.log(event) })

  }

  readvalue(){
    this.searchingform.value
  }


}
