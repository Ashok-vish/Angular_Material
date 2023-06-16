import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CONTACTComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TaskLifecycleComponent } from './task-lifecycle/task-lifecycle.component';
import { AppnotfoundComponent } from './appnotfound/appnotfound.component';
import { ProductComponent } from './product/product.component';


// component:TaskLifecycleComponent, if we mention component path before child then we can't able to see child detail
const routes: Routes = [

  { path: "task", children: [{ path: "product", component: ProductComponent }] },
  { path: "", component: HomeComponent },
  { path: "contact", component: CONTACTComponent },
  { path: "about", component: AboutComponent },
  // {path:"task",component:TaskLifecycleComponent},
  { path: "**", component: AppnotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
