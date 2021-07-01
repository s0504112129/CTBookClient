import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ChildrenComponent } from './children/children.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
 
//  {path:'' , redirectTo:'/view',pathMatch:'full' },
  { path: 'view', component:ViewComponent  },
  { path: 'children', component:ChildrenComponent  },
  { path: 'login', component:LoginComponent  },
  { path: 'detail', component:DetailsComponent  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
