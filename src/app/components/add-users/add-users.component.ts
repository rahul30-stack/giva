import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  users: Users = new Users();
  submitted = false;
  UsersService: any;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  saveUsers(): void {
    this.UsersService.create(this.users).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
  newUsers(): void {
    this.submitted = false;
    this.users = new Users();
  }
}
