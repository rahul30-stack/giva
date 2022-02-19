import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { map } from 'rxjs/operators';
import { Users } from 'src/app/models/users';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  Users?:Users [
    
  ];
  currentUsers?: Users;
  currentIndex = -1;
  title = '';
  retrieveUsers: any;

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.retrieveusers();
  }
  refreshList(): void {
    this.currentUsers = undefined;
    this.currentIndex = -1;
    this.retrieveusers();
  }
    retrieveusers(): void {
    this.UsersService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id:c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.Users = data;
    });
  }
  setActiveUsers(Users: Users, index: number): void {
    this.currentUsers = Users;
    this.currentIndex = index;
  }


}
