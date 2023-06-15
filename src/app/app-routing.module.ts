import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CONTACTComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TaskLifecycleComponent } from './task-lifecycle/task-lifecycle.component';



const routes: Routes = [
{path:"",component:HomeComponent},
{path:"contact",component:CONTACTComponent},
{path:"about", component:AboutComponent},
{path:"task",component:TaskLifecycleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
