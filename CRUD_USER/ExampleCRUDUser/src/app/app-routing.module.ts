import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';


const routes: Routes = [{
  path: 'user',
  children: [
    {
      path: 'create',
      component: CreateUserComponent
    },
    {
      path: 'update/:id',
      component: UpdateUserComponent

    }, {
      path: '',
      component: UserComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
