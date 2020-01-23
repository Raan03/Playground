import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})

export class UserDemoComponent {
  userName: string;
  //userService: UserService;

  constructor(private userService: UserService) {

  }

  signIn(): void {
    this.userService.setUser({
      name: 'Ranu'
    });

    this.userName = this.userService.getUser().name;
    console.log('username is ', this.userName);

  }

}
