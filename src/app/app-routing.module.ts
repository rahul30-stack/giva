import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'Users', component: UsersDetailsComponent },
  { path: 'Users', component:UsersListComponent },
  { path: 'add', component:AddUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
