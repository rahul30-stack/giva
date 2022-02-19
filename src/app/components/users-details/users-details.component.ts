import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  @Input() Users?: Users;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentUsers: Users = {
    name: '',
    mail: '',
    disabled: false,
    roles:Array<string>()

  };
  message = '';
  constructor(private UsersService: UsersService) { }
  

  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentUsers = { ...this.Users };
  }
  updatedisabled(status: boolean): void {
    if (this.currentUsers.id) {
      this.UsersService.update(this.currentUsers.id, { disabled: status })
      .then(() => {
        this.currentUsers.disabled = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }
  updateUsers(): void {
    const data = {
      name: this.currentUsers.name,
      mail: this.currentUsers.mail
    };

    if (this.currentUsers.id) {
      this.UsersService.update(this.currentUsers.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }
  deleteUsers(): void {
    if (this.currentUsers.id) {
      this.UsersService.delete(this.currentUsers.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }


}
